# NavigatorRibbon.setViewEditButtonsStateByClass

NavigatorRibbon.setViewEditButtonsStateByClass
-


# NavigatorRibbon.setViewEditButtonsStateByClass


## Синтаксис


setViewEditButtonsStateByClass (classId)


## Параметры


classId. Класс объектов, элемент перечисления PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm).


## Описание


Метод setViewEditButtonsStateByClass устанавливает активность элементов управления, расположенных на ленте, в зависимости от класса объекта.


## Комментарии


Для разных классов объектов возможны различные опции: экспресс-отчеты можно просмотреть и отредактировать, а также обсудить в социальных сетях, некоторые объекты можно только просмотреть, а контейнеры можно только раскрыть в навигаторе, поэтому для них все кнопки недоступны.


## Пример


Для выполнения примера предполагается наличие на странице компонента [NavigatorRibbon](../../../Components/Metabase/NavigatorRibbon/NavigatorRibbon.htm) с наименованием «ribbon».


Чтобы кнопки отображались как при работе с экспресс-отчетом:


ribbon.setViewEditButtonsStateByClass(2561);


Чтобы кнопки отображались как при работе с регламентным отчетом:


ribbon.setViewEditButtonsStateByClass(2562);


См. также:


[NavigatorRibbon](NavigatorRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
