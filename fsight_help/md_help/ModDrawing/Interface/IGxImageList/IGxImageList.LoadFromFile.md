# IGxImageList.LoadFromFile

IGxImageList.LoadFromFile
-


# IGxImageList.LoadFromFile


## Синтаксис


LoadFromFile(Value: String; [Transparent: [IGxColor](../IGxColor/IGxColor.htm)
 = Null]);


## Параметры


Value. Параметр, определяющий
 строку, указывающую путь к файлу, который будет загружен в коллекцию.


Transparent. Параметр, определяющий
 цвет, который будет использоваться как прозрачный.


## Описание


Метод LoadFromFile осуществляет
 загрузку изображения в коллекцию из файла, путь и наименование которого,
 передаются посредством параметра Value.


## Пример


Для выполнения примера в файловой системе должны быть две пиктограммы:
 «C:\Icon_small.bmp» и «C:\Icon_large.bmp». В модуле подключите системные
 сборки: Metabase, Drawing, Fore, Io.


			Sub UserProc;

Var

    Mb: IMetabase;

    Object: IMetabaseObject;

    CustomClassExtender: IMetabaseCustomExtender;

    CustClasses: IMetabaseCustomClasses;

    CustomClass: IMetabaseCustomClass;

    Description: IMetabaseObjectDescriptor;

    ImgList: IGxImageList;

    ImgList32: IGxImageList;

Begin

    Mb := MetabaseClass.Active;

    // Определение контейнера пользовательских классов

    Description := Mb.SpecialObject(MetabaseSpecialObject.CustomExtender);

    Object := Description.Edit;

    CustomClassExtender := Object As IMetabaseCustomExtender;

    // Создание коллекций изображений

    ImgList := New GxImageList.Create;

    ImgList.Height := 16;

    ImgList.LoadFromFile("C:\Icon_small.bmp", GxColor.FromKnownColor(GxKnownColor.White));

    CustomClassExtender.SmallImages := ImgList;

    ImgList32 := New GxImageList.Create;

    ImgList32.Height := 32;

    ImgList32.LoadFromFile("C:\Icon_large.bmp", GxColor.FromKnownColor(GxKnownColor.White));

    CustomClassExtender.LargeImages := ImgList32;

    CustomClassExtender.IsShared := True;

    // Добавление пользовательского класса в контейнер

    CustClasses := CustomClassExtender.Classes;

    CustomClass := CustClasses.Add;

    CustomClass.Name := "My
 class";

    CustomClass.Description := "Собственный класс";

    CustomClass.ImageIndex := 0;

    Object.Save;

End Sub UserProc;


После выполнения примера будет создан контейнер [пользовательских
 классов](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/ObjectsClasses.htm), содержащий один класс с наименованием «My
 class». Источником большой пиктограммы для объекта
 будет файл «C:\Icon_large.bmp», маленькой - «C:\Icon_small.bmp».


См. также:


[IGxImageList](IGxImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
