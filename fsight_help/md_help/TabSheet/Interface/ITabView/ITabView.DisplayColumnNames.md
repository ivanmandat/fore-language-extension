# ITabView.DisplayColumnNames

ITabView.DisplayColumnNames
-


# ITabView.DisplayColumnNames


## Синтаксис


DisplayColumnNames: Boolean;


## Описание


Свойство DisplayColumnNames
 определяет видимость наименований столбцов таблицы.


## Комментарии


Допустимые значения:


	- True. Наименования столбцов
	 отображаются.


	- False. Наименования
	 столбцов скрыты.


Если наименования столбцов скрыты, то недоступно интерактивное изменение
 ширины столбцов с помощью мыши. Изменить ширину можно с помощью свойств
 [ITabSheet.ColumnPixelWidth](../ITabSheet/ITabSheet.ColumnPixelWidth.htm)
 или [ITabSheet.ColumnWidth](../ITabSheet/ITabSheet.ColumnWidth.htm).


Если необходима возможность изменять ширину именно мышью, то создайте
 фиксированную область, указав необходимое количество [фиксированных
 столбцов](ITabView.FixedColumnsCount.htm), и в свойстве [ITabView.FixedBehaviour](ITabView.FixedBehaviour.htm)
 установите значение [TabFixedBehaviour.Resizable](../../Enums/TabFixedBehaviour.htm).


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
