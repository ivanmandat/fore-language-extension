# ICubeMetaUpdateEx.SaveEx

ICubeMetaUpdateEx.SaveEx
-


# ICubeMetaUpdateEx.SaveEx


## Синтаксис


SaveEx(FileName: String; Progress: [IMetabaseUpdateProgress](kesom.chm::/interface/imetabaseupdateprogress/imetabaseupdateprogress.htm));


## Параметры


FileName. Наименование файла,
 в который будет сохранена база данных временных рядов;


Progress. Объект, реализующий
 события, возникающие при выполнении копировании.


## Описание


Метод SaveEx копирует
 базу данных временных рядов в файл с возможностью обработки событий, возникающих
 во время копирования.


## Комментарии


В результате выполнения метода создается ZIP-архив, содержащий необходимые
 файлы с информацией о базе данных временных рядов и данными временных
 рядов. В качестве значения параметра FileName
 укажите путь и наименование файла вместе с расширением «zip».


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором «TSDB».


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubUpdateEx: ICubeMetaUpdateEx;

	    Rub: IRubricator;

	    Progress: MyUpdateProgress;

	Begin

	    // Получаем текущий репозиторий

	    Mb := MetabaseClass.Active;

	    // Создаем объект копирования

	    RubUpdateEx := New CubeMetaUpdateClass.Create;

	    // Получаем базу данных временных рядов

	    Rub := Mb.ItemById("TSDB").Bind As IRubricator;

	    // Указываем копируемую
	 базу данных временных рядов

	    RubUpdateEx.Rubricator := Rub;

	    // Создаем объект, реализующий события, которые происходят во время копирования

	    Progress := New MyUpdateProgress.Create;

	    // Выполняем сохранение в файл

	    RubUpdateEx.SaveEx("C:\Replication.zip", Progress);

	End Sub UserProc;

	// Класс, реализующий события, которые происходят во время копирования

	Class MyUpdateProgress: UpdateProgress

	    // Событие, возникающее при ошибках копирования

	    Sub OnError(Data: IMetabaseUpdateProgressData; Var Ignore: Boolean);

	    Begin

	        Debug.WriteLine("Ошибка копирования объекта обновления '" + Data.Node.Label + "'");

	        Debug.WriteLine("Текст ошибки: " + Data.Error.Message);

	        If Data.Object <> Null Then

	            Debug.WriteLine("Источник ошибки: " + Data.Object.Id);

	            Debug.WriteLine("Ключ объекта: " + Data.Object.Key.ToString);

	        End If;

	        Debug.WriteLine("Объект будет пропущен");

	        Ignore := True;

	    End Sub OnError;

	End Class MyUpdateProgress;


В результате выполнения примера база данных временных рядов «TSDB» будет
 сохранена в файл «C:\Replication.zip». Если при сохранении возникнут ошибки,
 то они будут выведены в окно консоли.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
