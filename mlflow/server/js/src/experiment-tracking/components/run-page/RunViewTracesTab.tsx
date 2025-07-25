import type { KeyValueEntity } from '../../../common/types';
import { TracesView } from '../traces/TracesView';
import { useMemo } from 'react';
import { ExperimentViewTracesTableColumns } from '../traces/TracesView.utils';

const disabledColumns = [ExperimentViewTracesTableColumns.runName];

/**
 * A run page tab containing the artifact browser
 */
export const RunViewTracesTab = ({
  experimentId,
  runUuid,
}: {
  runUuid: string;
  experimentId: string;
  runTags: Record<string, KeyValueEntity>;
}) => {
  const stableExperimentId = useMemo(() => [experimentId], [experimentId]);

  return (
    <div css={{ flex: 1, minWidth: 0 }}>
      <TracesView experimentIds={stableExperimentId} runUuid={runUuid} disabledColumns={disabledColumns} />
    </div>
  );
};
