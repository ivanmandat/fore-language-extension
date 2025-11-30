# IMetabaseUpdateUserEvents.OnUpdateObject

IMetabaseUpdateUserEvents.OnUpdateObject
-


# IMetabaseUpdateUserEvents.OnUpdateObject


## Синтаксис


OnUpdateObject(Update: [IMetabaseUpdate](../IMetabaseUpdate/IMetabaseUpdate.htm);
 CurrentNode: [IMetabaseUpdateNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.htm);
 Var Skip: Boolean);


## Параметры


Update. Обновление, применяемое к текущему репозиторию.


CurrentNode. Объект обновления, который будет применен
 к объекту репозитория.


Skip. Параметр,
 определяющий будет ли проводится обновление объекта.


## Описание


Метод OnUpdateObject реализует
 событие, возникающее непосредственно перед обновлением объекта репозитория,
 которому соответствует объект обновления CurrentNode.


## Комментарии


По умолчанию параметру Skip
 установлено значение False, при
 этом осуществляется обновление объекта. Если
 параметру установить значение
 True, то обновление объекта, которому соответствует
 объект CurrentNode,
 производиться не будет. Объект
 будет пропущен.


## Пример


Использование свойства приведено в примере для [IMetabaseUpdateUserEvents.OnAskConstraintsHandling](IMetabaseUpdateUserEvents.OnAskConstraintsHandling.htm).


См. также:


[IMetabaseUpdateUserEvents](IMetabaseUpdateUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
