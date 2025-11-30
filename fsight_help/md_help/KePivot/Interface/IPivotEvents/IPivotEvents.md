# IPivotEvents

IPivotEvents
-


# IPivotEvents


Сборка: Pivot;


## Описание


Интерфейс IPivotEvents используется
 для реализации событий обработчика таблицы.


## Иерархия наследования


           IPivotEvents


## Комментарии


Обработчик событий таблицы используется только в рамках сессии и не
 сохраняется вместе с отчётом, поэтому целесообразно использовать не модули,
 а формы.


Методы данного интерфейса должны быть реализованы в пользовательском
 классе. Для использования обработчиков событий установите свойству [IPivot.EventsEnabled](../IPivot/IPivot.EventsEnabled.htm)
 значение True и добавьте экземпляр
 обработчика с помощью метода [IPivot.AddEventHandler](../IPivot/IPivot.AddEventHandler.htm).
 Для отключения пользовательского обработчика событий используйте метод
 [IPivot.RemoveEventHandler](../IPivot/IPivot.RemoveEventHandler.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAfterDataSourceExecute](IPivotEvents.OnAfterDataSourceExecute.htm)
		 Метод OnAfterDataSourceExecute
		 реализует событие, которое наступает после вычисления источника
		 данных.


		 ![](../../Sub_Image.gif)
		 [OnAfterDrillUpThrough](IPivotEvents.OnAfterDrillUpThrough.htm)
		 Метод OnAfterDrillUpThrough
		 реализует событие, которое наступает после выполнения детализации
		 данных таблицы в реляционную таблицу.


		 ![](../../Sub_Image.gif)
		 [OnAfterSelSetChanged](IPivotEvents.OnAfterSelSetChanged.htm)
		 Метод OnAfterSelSetChanged
		 реализует событие, которое наступает после изменения отметки в
		 источнике данных.


		 ![](../../Sub_Image.gif)
		 [OnBeforeDataSourceChange](IPivotEvents.OnBeforeDataSourceChange.htm)
		 Метод OnBeforeDataSourceChange
		 реализует событие, которое наступает перед изменением варианта
		 отображения в источнике данных.


		 ![](../../Sub_Image.gif)
		 [OnBeforeDataSourceExecute](IPivotEvents.OnBeforeDataSourceExecute.htm)
		 Метод OnBeforeDataSourceExecute
		 реализует событие, которое наступает перед вычислением источника
		 данных.


		 ![](../../Sub_Image.gif)
		 [OnBeforeDrillDownThrough](IPivotEvents.OnBeforeDrillDownThrough.htm)
		 Метод OnBeforeDrillDownThrough
		 реализует событие, которое наступает перед выполнением детализации
		 данных таблицы в реляционную таблицу.


		 ![](../../Sub_Image.gif)
		 [OnBeforeSelectionChangeSent](IPivotEvents.OnBeforeSelectionChangeSent.htm)
		 Метод OnBeforeSelectionChangeSent
		 реализует событие, которое наступает перед изменением отметки
		 измерения источника данных.


		 ![](../../Sub_Image.gif)
		 [OnBeforeTableRefresh](IPivotEvents.OnBeforeTableRefresh.htm)
		 Метод OnBeforeTableRefresh
		 реализует событие, которое наступает перед обновлением таблицы.


		 ![](../../Sub_Image.gif)
		 [OnBroughtOutDimHeaderChange](IPivotEvents.OnBroughtOutDimHeaderChange.htm)
		 Метод OnBroughtOutDimHeaderChange
		 реализует событие, которое наступает при изменении заголовка,
		 в котором располагаются измерения.


		 ![](../../Sub_Image.gif)
		 [OnChange](IPivotEvents.OnChange.htm)
		 Метод OnChange реализует
		 событие, которое наступает при внесении каких-либо изменений в
		 структуру основы для таблицы.


		 ![](../../Sub_Image.gif)
		 [OnDataSourceChange](IPivotEvents.OnDataSourceChange.htm)
		 Метод OnDataSourceChange
		 реализует событие, которое наступает при изменении источника данных.


		 ![](../../Sub_Image.gif)
		 [OnFilterSeparateHeadersChange](IPivotEvents.OnFilterSeparateHeadersChange.htm)
		 Метод OnFilterSeparateHeadersChange
		 реализует событие, которое наступает при изменении признака раздельной
		 фильтрации строк и столбцов.


		 ![](../../Sub_Image.gif)
		 [OnFinishExecute](IPivotEvents.OnFinishExecute.htm)
		 Метод OnFinishExecute
		 реализует событие, которое наступает в момент завершения применения
		 всех изменений и расчётов в таблице.


		 ![](../../Sub_Image.gif)
		 [OnHeaderChange](IPivotEvents.OnHeaderChange.htm)
		 Метод OnHeaderChange
		 реализует событие, которое наступает при изменении заголовка таблицы.


		 ![](../../Sub_Image.gif)
		 [OnHighlightChange](IPivotEvents.OnHighlightChange.htm)
		 Метод OnHighlightChange
		 реализует событие, которое наступает при изменении подсветки в
		 таблице.


		 ![](../../Sub_Image.gif)
		 [OnMatrixerChange](IPivotEvents.OnMatrixerChange.htm)
		 Метод OnMatrixerChange
		 реализует событие, которое наступает при изменении матрицы с данными.


		 ![](../../Sub_Image.gif)
		 [OnParamChange](IPivotEvents.OnParamChange.htm)
		 Метод OnParamChange
		 реализует событие, которое наступает при изменении параметров
		 основы для таблицы.


		 ![](../../Sub_Image.gif)
		 [OnPivotTableCellChange](IPivotEvents.OnPivotTableCellChange.htm)
		 Метод OnPivotTableCellChange
		 реализует событие, которое наступает при изменении данных в ячейке
		 таблицы.


		 ![](../../Sub_Image.gif)
		 [OnPivotTableCellChanged](IPivotEvents.OnPivotTableCellChanged.htm)
		 Метод OnPivotTableCellChanged
		 реализует событие, которое наступает после изменения данных в
		 ячейке таблицы.


		 ![](../../Sub_Image.gif)
		 [OnPivotTableEvent](IPivotEvents.OnPivotTableEvent.htm)
		 Метод OnPivotTableEvent
		 реализует событие, которое наступает при генерации какого-либо
		 события в таблице.


		 ![](../../Sub_Image.gif)
		 [OnSelectionChange2](IPivotEvents.OnSelectionChange2.htm)
		 Метод OnSelectionChange2
		 реализует событие, которое наступает при изменении отметки в измерении
		 источника данных.


		 ![](../../Sub_Image.gif)
		 [OnSelectionContentChange](IPivotEvents.OnSelectionContentChange.htm)
		 Метод OnSelectionContentChange
		 реализует событие, которое наступает при изменении содержимого
		 элементов отметки измерения.


		 ![](../../Sub_Image.gif)
		 [OnSelectionStructureChange](IPivotEvents.OnSelectionStructureChange.htm)
		 Метод OnSelectionStructureChange
		 реализует событие, которое наступает при изменении структуры элементов
		 отметки измерения.


		 ![](../../Sub_Image.gif)
		 [OnStartExecute](IPivotEvents.OnStartExecute.htm)
		 Метод OnStartExecute
		 реализует событие, которое наступает в момент старта применения
		 изменений и расчётов в таблице.


См. также:


[Интерфейсы
 сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
