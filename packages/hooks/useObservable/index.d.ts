import * as React from 'react';
import { Observable } from 'rxjs';
export declare type observerFunction<T> = () => Observable<T>;
/**
 * Create a memoized observable and unsubscribe automatically if component unmount
 * @returns [observableValue, error, isCompleted]
 */
export default function useObservable<T>(observableGenerator: observerFunction<T>, deps: React.DependencyList, defaultValue?: T | null): [T | null, any, boolean, undefined];
