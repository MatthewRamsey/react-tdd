import React from 'react';
import { render, screen } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';
import { instance, mock, when } from 'ts-mockito';
import DataApi from "../services/DataApi";
import MainSection from "./sections/MainSection";

describe("App", () => {
  it("shouldn't contain any items nor be in a loading state by default", () => {
    const shallowRenderer = ShallowRenderer.createRenderer();
    shallowRenderer.render(<App dataApi={instance(mock(DataApi))}/>)
    
    const result = shallowRenderer.getRenderOutput();
    
    expect(result.type).toBe(MainSection);

    expect(result.props.isLoading).toBe(false);
    expect(result.props.items).toHaveLength(0);
  })
})
