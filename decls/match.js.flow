/* @flow */
declare module "@mizchi/match" {
  declare class Match$Resolved<T, U> {
    then(next: () => U): Match$Resolved<T, U>;
    default(next: () => U): U;
    end(): ?U;

    if(matcher: (t: T) => boolean): Match$Resolved<T, U>;
    case(v: T): Match$Resolved<T, U>;
    instanceof(klass: typeof Object): Match$Resolved<T, U>;
  }

  declare class Match$Unresolved<T> {
    then<U>(next: () => U): Match$Resolved<T, U>;
    default<U>(next: () => U): U;
    end(): void;

    if(matcher: (t: T) => boolean): Match$Unresolved<T>;
    case(v: T): Match$Unresolved<T>;
    instanceof(klass: typeof Object): Match$Unresolved<T>;
  }

  declare function exports<T>(t: T): Match$Unresolved<T>;
}
