/**
 * Created by chia-yenhung on 4/9/17.
 */
import React from "react";
import Mention from "./mention";

export const generateMentions = (mentions, textWithoutMentions) => {
  const texts = [];
  textWithoutMentions.forEach((textWithoutMention, index) => {
    texts.push(textWithoutMention);
    if (index !== mentions.length) {
      texts.push(<Mention mention={mentions[index]}/>);
    }
  });
  return texts;
};

export const getMentions = (body) => {
  if (!body) return [];
  body = `  ${body}`;
  const pattern = /\@\w+/;
  const mentions = body.match(pattern);
  const textWithoutMentions = body.split(pattern);
  if (textWithoutMentions.length === 1) return [body];
  return generateMentions(mentions, textWithoutMentions);
};

export const getParagraphs = (body) => {
  if (!body) return [];
  let texts = [];
  const pattern = "\n\r";
  const paragraphs = body.split(pattern);
  paragraphs.forEach((paragraph) => {
    texts = texts.concat(getMentions(paragraph));
    texts.push(<br/>);
  });
  return texts;
};

