# IDataGridBandBase.Menu

IDataGridBandBase.Menu
-


# IDataGridBandBase.Menu


## Синтаксис


Menu: [IPopupMenu](ModForms.chm::/Interface/IPopupMenu/IPopupMenu.htm);


## Описание


Свойство Menu определяет контекстное
 меню, вызываемое в области заголовка контейнера/колонки.


## Комментарии


В список допустимых значений входят все компоненты [PopupMenu](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/PopupMenu.htm),
 расположенные на форме.


По умолчанию данное свойство не установлено. При этом в заголовках будет
 вызываться системное контекстное меню, либо меню, указанное в свойстве
 [HeaderMenu](../IDataGrid/IDataGrid.HeaderMenu.htm) родительского
 компонента [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm).
 Описание системного меню представлено в описании компонента [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm)
 в подразделе [Выбор
 столбцов](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm#choice_column).


См. также:


[IDataGridBandBase](IDataGridBandBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
