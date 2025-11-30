# IMetabaseObjectDescriptor.UndoCheckOutEx

IMetabaseObjectDescriptor.UndoCheckOutEx
-


# IMetabaseObjectDescriptor.UndoCheckOutEx


## Синтаксис


		UndoCheckOutEx(Var ResId: Integer): Boolean;


## Параметры


ResId. Переменная,
 в которую будет помещен код ошибки.


## Описание


Метод UndoCheckOutEx осуществляет
 отмену изменений и возвращает предыдущую версию объекта.


## Комментарии


Данный метод актуально использовать, если объект добавлен в [систему
 управления версиями](uidevenv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm).


При вызове метода будет открыт диалог отмены изменений [локального
 файла объекта](uidevenv.chm::/01_development_environment/06_version_control_system/VSC_Add_Object.htm). При удачной отмене и возврату к предыдущей
 версии локального файла объекта метод возвращает значение True.
 Код ошибки при этом будет «0».


Если отмена изменений не произошла, то метод вернет значение False.
 В параметр ResId будет помещен
 код ошибки.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
