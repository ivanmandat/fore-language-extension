# IForeSerializer.SaveAssemblyToFile

IForeSerializer.SaveAssemblyToFile
-


# IForeSerializer.SaveAssemblyToFile


## Синтаксис


SaveAssemblyToFile(Assembly: [IAssembly](KeSom.chm::/Interface/IAssembly/IAssembly.htm); FileName: String);


## Параметры


Assembly - сборка репозитория, которую необходимо сохранить в файл.


FileName - путь и наименование файла, в который будет сохранена сборка.


## Описание


Метод SaveAssemblyToFile сохраняет сборку в указанный файл.


## Комментарии


Для файла, в который будет сохранена сборка, должно быть указано расширение «ppassembly».


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с идентификатором «Assembly_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Fs: IForeSerializer;

    MObj: IMetabaseObjectDescriptor;

    Assm: IAssembly;

Begin

    MB := MetabaseClass.Active;

    Fs := New ForeSerializer.Create;

    MObj := MB.ItemById("Assembly_1");

    Assm := MObj.Bind As IAssembly;

    Fs.SaveAssemblyToFile(Assm, "c:\" + MObj.Id + ".ppassembly");

End Sub UserProc;


После выполнения примера указанная сборка будет сохранена в файл в корневом каталоге диска С.


См. также:


[IForeSerializer](IForeSerializer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
