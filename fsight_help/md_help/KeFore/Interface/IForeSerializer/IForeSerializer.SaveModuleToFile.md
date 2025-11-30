# IForeSerializer.SaveModuleToFile

IForeSerializer.SaveModuleToFile
-


# IForeSerializer.SaveModuleToFile


## Синтаксис


SaveModuleToFile(Module: [IModule](KeSom.chm::/Interface/IModule/IModule.htm); FileName: String);


## Параметры


Module - модуль репозитория, который необходимо сохранить в файл.


FileName - путь и наименование файла, в который будет сохранен модуль.


## Описание


Метод SaveModuleToFile сохраняет модуль в указанный файл.


## Комментарии


Для файла, в который будет сохранен модуль, должно быть указано расширение «ppmodule».


## Пример


Для выполнения примера предполагается наличие в репозитории модуля с идентификатором «Module_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Fs: IForeSerializer;

    MObj: IMetabaseObjectDescriptor;

    Module: IModule;

Begin

    MB := MetabaseClass.Active;

    Fs := New ForeSerializer.Create;

    MObj := MB.ItemById("Module_1");

    Module := MObj.Bind As IModule;

    Fs.SaveModuleToFile(Module, "c:\" + MObj.Id + ".ppmodule");

End Sub UserProc;


После выполнения примера указанный модуль будет сохранен в файл в корневом каталоге диска С.


См. также:


[IForeSerializer](IForeSerializer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
