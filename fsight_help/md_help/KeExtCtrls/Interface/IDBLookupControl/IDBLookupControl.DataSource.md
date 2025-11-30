# IDBLookupControl.DataSource

IDBLookupControl.DataSource
-


# IDBLookupControl.DataSource


## Синтаксис


DataSource: [IUiDataSource](../IUiDataSource/IUiDataSource.htm);


## Описание


Свойство DataSource связывает
 компонент группы с набором данных, который содержит поле [DataField](IDBLookupControl.DataField.htm).


## Комментарии


Данное свойство устанавливает связь с набором данных, содержащим представляемое
 поле, в отличие от свойства [ListSource](IDBLookupControl.ListSource.htm),
 которое связывает данный компонент с таблицей поиска, содержащей фактически
 отображаемое поле. Если компонент поиска используется для редактирования
 данных, то изменения вносятся в одно из полей источника DataSource.


Список допустимых значений свойства включает имена всех компонентов
 [UiDataSource](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiDataSource.htm),
 расположенных на форме.


См. также:


[IDBLookupControl](IDBLookupControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
