# IBaseRibbonElement.OnChange

IBaseRibbonElement.OnChange
-


# IBaseRibbonElement.OnChange


## Синтаксис


OnChange(Sender: Object; Args: IEventArgs);


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnChange наступает при
 использовании элемента управления ленты.


## Комментарии


При использовании какого-либо элемента управления ленты для компонента
 Ribbon наступает событие [Ribbon.OnChange](../../Class/Ribbon/Ribbon.OnChange.htm).
 Также для элемента управления может быть установлен собственны обработчик
 события OnChange, которое будет наступать после события [Ribbon.OnChange](../../Class/Ribbon/Ribbon.OnChange.htm)
 всей ленты.


См. также:


[IBaseRibbonElement](IBaseRibbonElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
