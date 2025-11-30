# ISearchDataSourcesBox.StartSearch

ISearchDataSourcesBox.StartSearch
-


# ISearchDataSourcesBox.StartSearch


## Синтаксис


StartSearch(Text: String);


## Параметры


Text. Текст, который будет
 искаться в индексированных данных в процессе BI-поиска.


## Описание


Метод StartSearch запускает
 процесс BI-поиска.


## Комментарии


По завершению поиска будет определено общее количество найденных совпадений
 и загружены первые результаты. Общее количество будет доступно в свойстве
 [TotalCount](ISearchDataSourcesBox.TotalCount.htm).
 Первые сто элементов с результатами поиска будут доступны в свойстве [Items](ISearchDataSourcesBox.Items.htm).
 Для загрузки следующих результатов поиска используйте метод [LoadNextPage](ISearchDataSourcesBox.LoadNextPage.htm).


См. также:


[ISearchDataSourcesBox](ISearchDataSourcesBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
