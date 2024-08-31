/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use fixture_tests::Fixture;
use schema::build_schema;
use schema_print::print_types_directives_as_shards_in_parallel;

pub async fn transform_fixture(fixture: &Fixture<'_>) -> Result<String, String> {
    let schema = build_schema(fixture.content).unwrap();
    let type_shard_count = fnv::FnvHashMap::default();
    let sep = "\n=======Shard=======\n\n";
    let mut par_shard_map =
        print_types_directives_as_shards_in_parallel(&schema, 4, type_shard_count.clone())
            .into_iter()
            .collect::<Vec<_>>();
    par_shard_map.sort_by_key(|(shard_key, _shard_content)| *shard_key);
    let par_types = par_shard_map
        .into_iter()
        .map(|(_, shard_content)| shard_content)
        .collect::<Vec<_>>()
        .join(sep);

    Ok(par_types.to_string())
}