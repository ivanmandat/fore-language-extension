# IMetabaseObjectDescriptor.UndoCheckOut

IMetabaseObjectDescriptor.UndoCheckOut
-


# IMetabaseObjectDescriptor.UndoCheckOut


## Синтаксис


		UndoCheckOut;


## Описание


Метод UndoCheckOut осуществляет
 отмену изменений и снятие блокировки объекта.


## Комментарии


Если объект добавлен в [систему
 управления версиями](uidevenv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm), то вызов метода приведёт к отмене
 изменений и возврату к предыдущей версии [локального
 файла объекта](uidevenv.chm::/01_development_environment/06_version_control_system/VSC_Add_Object.htm). Если отмена изменений не была произведена,
 то будет сгенерирована исключительная ситуация.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
