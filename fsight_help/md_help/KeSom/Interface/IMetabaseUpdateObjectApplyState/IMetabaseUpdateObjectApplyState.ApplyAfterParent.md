# IMetabaseUpdateObjectApplyState.ApplyAfterParent

IMetabaseUpdateObjectApplyState.ApplyAfterParent
-


# IMetabaseUpdateObjectApplyState.ApplyAfterParent


## Синтаксис


ApplyAfterParent: Boolean;


## Описание


Свойство ApplyAfterParent устанавливает, будет ли применяться обновление к объекту после обновления его родительского объекта.


## Комментарии


Данное свойство актуально для обновления следующих пар родительских и дочерних объектов: кубы и экспресс-отчеты, справочники и схемы отметки/группы элементов.


Допустимые значения:


-
True. Значение по умолчанию. Обновление применяется сначала для родительских объектов, затем - для дочерних;


-
False. Обновление применяется сначала для дочерних объектов, затем - для родительских.


См. также:


[IMetabaseUpdateObjectApplyState](IMetabaseUpdateObjectApplyState.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
