# IEtlBox.DefaultMenu

IEtlBox.DefaultMenu
-


# IEtlBox.DefaultMenu


## Синтаксис


DefaultMenu: Boolean;


## Описание


Свойство DefaultMenu определяет
 признак доступности системного контекстного меню у объектов и рабочей
 области задачи ETL.


## Комментарии


Допустимые значения:


	- True. Системное контекстное
	 меню для объектов и рабочей области задачи ETL доступно;


	- False. По умолчанию.
	 Системное контекстное меню для объектов и рабочей области задачи ETL
	 недоступно. В этом случае контекстное меню можно задать с помощью
	 свойства [IControl.PopupMenu](ModForms.chm::/Interface/IControl/IControl.PopupMenu.htm).


Примечание.
 При заданном свойстве [IControl.PopupMenu](ModForms.chm::/Interface/IControl/IControl.PopupMenu.htm)
 системное контекстное меню будет недоступно для использования.


Свойство доступно для использования, если свойству [IEtlBox.DefaultHandlers](IEtlBox.DefaultHandlers.htm)
 установлено значение True.


## Пример


Использование свойства приведено в примере для [IEtlBox.DefaultHandlers](IEtlBox.DefaultHandlers.htm).


См. также:


[IEtlBox](IEtlBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
