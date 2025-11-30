# ISolrImportProcessOptions.BlockSize

ISolrImportProcessOptions.BlockSize
-


# ISolrImportProcessOptions.BlockSize


## Синтаксис


BlockSize: Integer;


## Описание


Свойство BlockSize определяет
 количество элементов по самому большому измерению, которые будут обрабатываться
 при вычислении матрицы.


## Комментарии


По умолчанию свойству установлено значение - 50.


Увеличение количества элементов приведет к увеличению затрачиваемой
 памяти и времени расчета, необходимых для построения матрицы в рамках
 одной итерации. Суммарное количество итераций, необходимых для построения
 всей матрицы, при этом снизится.


## Пример


Пример использования приведён в описании свойства [ISolrSearchEngineSchema.ImportProcessOptions](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.ImportProcessOptions.htm).


См. также:


[ISolrImportProcessOptions](ISolrImportProcessOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
