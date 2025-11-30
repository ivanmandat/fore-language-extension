# ITabView.DisplayRowNumbers

ITabView.DisplayRowNumbers
-


# ITabView.DisplayRowNumbers


## Синтаксис


DisplayRowNumbers: Boolean;


## Описание


Свойство DisplayRowNumbers определяет
 видимость номеров строк таблицы.


## Комментарии


Допустимые значения:


	- True. Номера строк отображаются.


	- False. Номера строк
	 скрыты.


Если номера строк скрыты, то недоступно интерактивное изменение высоты
 строк с помощью мыши. Изменить высоту можно с помощью свойств [ITabSheet.RowPixelHeight](../ITabSheet/ITabSheet.RowPixelHeight.htm)
 или [ITabSheet.RowHeight](../ITabSheet/ITabSheet.RowHeight.htm).


Если необходима возможность изменять высоту именно мышью, то создайте
 фиксированную область, указав необходимое количество [фиксированных
 строк](ITabView.FixedRowsCount.htm), и в свойстве [ITabView.FixedBehaviour](ITabView.FixedBehaviour.htm)
 установите значение [TabFixedBehaviour.Resizable](../../Enums/TabFixedBehaviour.htm).


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
