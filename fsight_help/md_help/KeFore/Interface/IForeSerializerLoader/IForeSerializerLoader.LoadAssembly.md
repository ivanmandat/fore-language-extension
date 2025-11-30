# IForeSerializerLoader.LoadAssembly

IForeSerializerLoader.LoadAssembly
-


# IForeSerializerLoader.LoadAssembly


## Синтаксис


LoadAssembly: [IAssembly](KeSom.chm::/Interface/IAssembly/IAssembly.htm);


## Описание


Метод LoadAssembly осуществляет
 загрузку и сохранение сборки в репозиторий.


## Комментарии


Метод осуществляет сохранение сборки в соответствии с параметрами, указанными
 в свойстве [CreateInfo](IForeSerializerLoader.CreateInfo.htm).
 Если в репозитории существует объект, имеющий такой же идентификатор,
 как и у загружаемой сборки, то будет сгенерирована исключительная ситуация.


## Пример


Для выполнения примера предполагается наличие файла «c:\Assembly_1.ppassembly»,
 содержащего сохраненную сборку платформы.


			Sub UserProc;

Var

    MB: IMetabase;

    Fs: IForeSerializer;

    Loader: IForeSerializerLoader;

    Id: String;

Begin

    MB := MetabaseClass.Active;

    Fs := New ForeSerializer.Create;

    Loader := Fs.CreateLoaderFromFile("c:\Assembly_1.ppassembly", MB);

    Id := Loader.CreateInfo.Id;

    If MB.ItemById(Id) <> Null Then

        Loader.CreateInfo.Id := MB.GenerateId(Id);

        Loader.CreateInfo.Name := Loader.CreateInfo.Name + "_Copy";

    End If;

    Loader.CreateInfo.Parent := MB.Root;

    Loader.LoadAssembly;

End Sub UserProc;


При выполнении примера из указанного файла будет загружена сборка. Сборка
 будет сохранена в корневом каталоге репозитория. Если в репозитории существует
 объект, имеющий такой же идентификатор как и загружаемая сборка, то перед
 загрузкой идентификатор сборки будет изменен.


См. также:


[IForeSerializerLoader](IForeSerializerLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
