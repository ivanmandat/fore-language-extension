# IDataGridBandBaseOptions.Moveable

IDataGridBandBaseOptions.Moveable
-


# IDataGridBandBaseOptions.Moveable


## Синтаксис


Moveable: Boolean;


## Описание


Свойство Moveable определяет
 возможность перемещения контейнера или столбца.


## Комментарии


Если свойству установлено значение True,
 то контейнер/столбец можно будет переместить в компоненте с помощью мыши,
 либо в диалоге [Выбор
 столбцов](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm#choice_column). Если свойству установлено значение False, то возможности переместить
 контейнер/столбец не будет.


Необходимым условием для перемещения контейнеров/столбцов с помощью
 мыши является установка свойству [AllowPress](IDataGridBandBaseOptions.AllowPress.htm)
 значения True.


Примечание.
 Вне зависимости от значения данного свойства будет возможность переместить
 контейнер/столбец путем изменения его родительского контейнера, либо изменением
 расположения соседних контейнеров/колонок.


См. также:


[IDataGridBandBaseOptions](IDataGridBandBaseOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
