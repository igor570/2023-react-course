export type Item = {
  title: string;
  text: string;
};

export type AccordianItemProps = {
  num: number;
} & Item; //Intersection joining two prop objects together

export type AccordianProps = {
  onToggleVisible: () => void;
};
