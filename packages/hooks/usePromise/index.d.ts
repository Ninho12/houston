import * as React from 'react';
export default function usePromise<T>(promiseGenerator: () => Promise<T>, deps: React.DependencyList): [T, any];
