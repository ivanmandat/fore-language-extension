# ICubeMetaUpdateEx.Save

ICubeMetaUpdateEx.Save
-


# ICubeMetaUpdateEx.Save


## Синтаксис


Save(FileName: String);


## Параметры


FileName. Наименование файла,
 в который будет сохранена база данных временных рядов.


## Описание


Метод Save сохраняет базу данных
 временных рядов в файл.


## Комментарии


При работе метода создается ZIP-архив, содержащий необходимые файлы
 с информацией о базе данных временных рядов и данными временных рядов.
 В качестве значения параметр FileName
 необходимо указать путь и наименование файла вместе с расширением «zip».


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC».


			Sub UserProc;

Var

    Mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

Begin

    Mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create;

    Rub := Mb.ItemById("FC").Bind As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    RubUpdateEx.Save("C:\Replication.zip");

End Sub UserProc;


После выполнения примера база данных временных рядов «FC» будет сохранена
 в файл «C:\Replication.zip».


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
