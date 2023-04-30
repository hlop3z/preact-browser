import injectCSS from "./css";
import { signal, computed, effect, batch } from "@preact/signals";
import { Component, createContext, h, render } from "preact";
import {
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useErrorBoundary,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "preact/hooks";

export default {
  // CSS
  injectCSS,
  // Preact
  Component,
  createContext,
  h,
  render,
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useErrorBoundary,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  // Signal
  signals: {
    signal,
    computed,
    effect,
    batch,
  },
};
