# IForeSerializerLoader.LoadModule

IForeSerializerLoader.LoadModule
-


# IForeSerializerLoader.LoadModule


## Синтаксис


LoadModule: [IModule](KeSom.chm::/Interface/IModule/IModule.htm);


## Описание


Метод LoadModule осуществляет
 загрузку и сохранение модуля в репозиторий.


## Комментарии


Метод осуществляет сохранение модуля в соответствии с параметрами, указанными
 в свойстве [CreateInfo](IForeSerializerLoader.CreateInfo.htm).
 Если в репозитории существует объект, имеющий такой же идентификатор,
 как и у загружаемого модуля, то будет сгенерирована исключительная ситуация.


## Пример


Для выполнения примера предполагается наличие файла «c:\Module_1.ppmodule»,
 содержащего сохраненный модуль платформы.


			Sub UserProc;

Var

    MB: IMetabase;

    Fs: IForeSerializer;

    Loader: IForeSerializerLoader;

    Id: String;

Begin

    MB := MetabaseClass.Active;

    Fs := New ForeSerializer.Create;

    Loader := Fs.CreateLoaderFromFile("c:\Module_1.ppmodule", MB);

    Id := Loader.CreateInfo.Id;

    If MB.ItemById(Id) <> Null Then

        Loader.CreateInfo.Id := MB.GenerateId(Id);

        Loader.CreateInfo.Name := Loader.CreateInfo.Name + "_Copy";

    End If;

    Loader.CreateInfo.Parent := MB.Root;

    Loader.LoadModule;

End Sub UserProc;


При выполнении примера из указанного файла будет загружен модуль. Модуль
 будет сохранен в корневом каталоге репозитория. Если в репозитории существует
 объект, имеющий такой же идентификатор как и загружаемый модуль, то перед
 загрузкой идентификатор модуля будет изменен.


См. также:


[IForeSerializerLoader](IForeSerializerLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
