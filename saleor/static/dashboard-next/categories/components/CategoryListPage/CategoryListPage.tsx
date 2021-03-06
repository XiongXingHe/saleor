import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import i18n from "@saleor/i18n";
import { ListActions, PageListProps } from "@saleor/types";
import CategoryList from "../CategoryList";

export interface CategoryTableProps extends PageListProps, ListActions {
  categories: Array<{
    id: string;
    name: string;
    children: {
      totalCount: number;
    };
    products: {
      totalCount: number;
    };
  }>;
}

export const CategoryListPage: React.StatelessComponent<CategoryTableProps> = ({
  categories,
  disabled,
  settings,
  onAdd,
  onNextPage,
  onPreviousPage,
  onUpdateListSettings,
  onRowClick,
  pageInfo,
  isChecked,
  selected,
  toggle,
  toggleAll,
  toolbar
}) => (
  <Container>
    <PageHeader title={i18n.t("Categories")}>
      <Button color="primary" variant="contained" onClick={onAdd}>
        {i18n.t("Add category")} <AddIcon />
      </Button>
    </PageHeader>
    <CategoryList
      categories={categories}
      onAdd={onAdd}
      onRowClick={onRowClick}
      disabled={disabled}
      settings={settings}
      isRoot={true}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
      onUpdateListSettings={onUpdateListSettings}
      pageInfo={pageInfo}
      isChecked={isChecked}
      selected={selected}
      toggle={toggle}
      toggleAll={toggleAll}
      toolbar={toolbar}
    />
  </Container>
);
CategoryListPage.displayName = "CategoryListPage";
export default CategoryListPage;
