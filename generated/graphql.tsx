import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Auth = Node & {
  __typename?: 'Auth';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type CreatePostInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  access_token: Scalars['String'];
  profile: Auth;
  refresh_token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  echo: Scalars['String'];
  login: LoginPayload;
  refreshTokens: TokensEntity;
  removePost: Post;
  signup: LoginPayload;
  updatePost: Post;
};

export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};

export type MutationEchoArgs = {
  message: Scalars['String'];
};

export type MutationLoginArgs = {
  loginInput: LoginInput;
};

export type MutationRemovePostArgs = {
  id: Scalars['Int'];
};

export type MutationSignupArgs = {
  signupInput: SignupInput;
};

export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};

export type Node = {
  _id: Scalars['ID'];
};

export type Post = Node & {
  __typename?: 'Post';
  _id: Scalars['ID'];
  authorId: Scalars['ID'];
  isPublished: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  ping: Scalars['String'];
  post: Post;
  posts: Array<Post>;
  whoAmI: Auth;
};

export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type SignupInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type TokensEntity = {
  __typename?: 'TokensEntity';
  access_token: Scalars['String'];
  refresh_token: Scalars['String'];
};

export type UpdatePostInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type EchoMutationVariables = Exact<{
  message: Scalars['String'];
}>;

export type EchoMutation = { __typename?: 'Mutation'; echo: string };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'LoginPayload';
    access_token: string;
    refresh_token: string;
    profile: {
      __typename?: 'Auth';
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  };
};

export type PingQueryVariables = Exact<{ [key: string]: never }>;

export type PingQuery = { __typename?: 'Query'; ping: string };

export type SignupMutationVariables = Exact<{
  signupInput: SignupInput;
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup: {
    __typename?: 'LoginPayload';
    access_token: string;
    refresh_token: string;
    profile: {
      __typename?: 'Auth';
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  };
};

export type WhoAmIQueryVariables = Exact<{ [key: string]: never }>;

export type WhoAmIQuery = {
  __typename?: 'Query';
  whoAmI: { __typename?: 'Auth'; _id: string; firstName: string; lastName: string; email: string };
};

export const EchoDocument = gql`
  mutation Echo($message: String!) {
    echo(message: $message)
  }
`;
export type EchoMutationFn = Apollo.MutationFunction<EchoMutation, EchoMutationVariables>;

/**
 * __useEchoMutation__
 *
 * To run a mutation, you first call `useEchoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEchoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [echoMutation, { data, loading, error }] = useEchoMutation({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useEchoMutation(
  baseOptions?: Apollo.MutationHookOptions<EchoMutation, EchoMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EchoMutation, EchoMutationVariables>(EchoDocument, options);
}
export type EchoMutationHookResult = ReturnType<typeof useEchoMutation>;
export type EchoMutationResult = Apollo.MutationResult<EchoMutation>;
export type EchoMutationOptions = Apollo.BaseMutationOptions<EchoMutation, EchoMutationVariables>;
export const LoginDocument = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      access_token
      refresh_token
      profile {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const PingDocument = gql`
  query Ping {
    ping
  }
`;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: Apollo.QueryHookOptions<PingQuery, PingQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PingQuery, PingQueryVariables>(PingDocument, options);
}
export function usePingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PingQuery, PingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, options);
}
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingQueryResult = Apollo.QueryResult<PingQuery, PingQueryVariables>;
export const SignupDocument = gql`
  mutation Signup($signupInput: SignupInput!) {
    signup(signupInput: $signupInput) {
      access_token
      refresh_token
      profile {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      signupInput: // value for 'signupInput'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
export const WhoAmIDocument = gql`
  query WhoAmI {
    whoAmI {
      _id
      firstName
      lastName
      email
    }
  }
`;

/**
 * __useWhoAmIQuery__
 *
 * To run a query within a React component, call `useWhoAmIQuery` and pass it any options that fit your needs.
 * When your component renders, `useWhoAmIQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoAmIQuery({
 *   variables: {
 *   },
 * });
 */
export function useWhoAmIQuery(
  baseOptions?: Apollo.QueryHookOptions<WhoAmIQuery, WhoAmIQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WhoAmIQuery, WhoAmIQueryVariables>(WhoAmIDocument, options);
}
export function useWhoAmILazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<WhoAmIQuery, WhoAmIQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WhoAmIQuery, WhoAmIQueryVariables>(WhoAmIDocument, options);
}
export type WhoAmIQueryHookResult = ReturnType<typeof useWhoAmIQuery>;
export type WhoAmILazyQueryHookResult = ReturnType<typeof useWhoAmILazyQuery>;
export type WhoAmIQueryResult = Apollo.QueryResult<WhoAmIQuery, WhoAmIQueryVariables>;
