# ICubeMetaUpdateEx.AddStream

ICubeMetaUpdateEx.AddStream
-


# ICubeMetaUpdateEx.AddStream


## Синтаксис


AddStream(Tag: String; Stream: Object);


## Параметры


Tag. Наименование потока;


Stream. Поток данных.


## Описание


Метод AddStream добавляет пользовательский
 поток данных в копируемую базу данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC».


			Sub UserProc;

Var

    mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

    ms: IMemoryStream;

Begin

    mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    Rub := mb.ItemById("FC").Bind As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    ms := New MemoryStream.Create;

    ms.WriteByte(1);

    ms.Seek(0, SeekOrigin.Beginning);

    RubUpdateEx.AddStream("UserStream", ms);

    RubUpdateEx.Save("C:\Param.zip");

End Sub UserProc;


После выполнения примера база данных временных рядов «FC» будет сохранён
 в файл «C:\Param.zip». Также в файле будет содержаться пользовательский
 поток данных «UserStream».


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
