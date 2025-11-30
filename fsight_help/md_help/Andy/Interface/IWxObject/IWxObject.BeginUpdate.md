# IWxObject.BeginUpdate

IWxObject.BeginUpdate
-


# IWxObject.BeginUpdate


## Синтаксис


		BeginUpdate;


## Описание


Метод BeginUpdate устанавливает
 запрет на перерисовку объекта. Метод используется для избежания мигания
 объекта при изменении его свойств. Все изменения, произведенные с объектом
 после выполнения метода BeginUpdate, не будут отображаться до тех пор,
 пока не будет вызван метод [IWxObject.EndUpdate](IWxObject.EndUpdate.htm).


## Пример


Пример использования приведен в описании [IWxLinkedBaloon.PointCount](../IWxLinkedBaloon/IWxLinkedBaloon.PointCount.htm).


См. также:


[IWxObject](IWxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
