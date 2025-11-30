# SearchDataSourcesBox.OnFinishSearch

SearchDataSourcesBox.OnFinishSearch
-


# SearchDataSourcesBox.OnFinishSearch


## Синтаксис


OnFinishSearch(Sender: Object; Args: [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnFinishSearch наступает
 после завершения процесса BI-поиска.


## Комментарии


После завершения BI-поиска общее количество найденных совпадений будет
 доступно в свойстве [ISearchDataSourcesBox.TotalCount](../../Interface/ISearchDataSourcesBox/ISearchDataSourcesBox.TotalCount.htm).
 В свойстве [ISearchDataSourcesBox.Items](../../Interface/ISearchDataSourcesBox/ISearchDataSourcesBox.Items.htm)
 будут доступные первые сто записей с результатами поиска, для получения
 следующих записей используйте метод [ISearchDataSourcesBox.LoadNextPage](../../Interface/ISearchDataSourcesBox/ISearchDataSourcesBox.LoadNextPage.htm).


См. также:


[SearchDataSourcesBox](SearchDataSourcesBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
