# Создание объектов пользовательского класса: Пользовательские метаданные

Создание объектов пользовательского класса: Пользовательские метаданные
-


# Создание объектов пользовательского
 класса


Объекты пользовательского класса создаются в [навигаторе
 объектов](GetStarted.chm::/Interface/Interface_Navigator.htm) как и другие объекты репозитория. Для этого
 в контекстном меню навигатора и в раскрывающемся меню кнопки «Новый
 объект» в группе «Создать»
 на вкладке ленты «[Главная](GetStarted.chm::/Interface/Interface_Description.htm#customize_ribbon)»
 выделена подгруппа команд «Пользовательские
 объекты».


Примечание.
 Создание объектов пользовательского класса доступно только в настольном
 приложении.


Дальнейшая работа с объектами пользовательских классов полностью осуществляется
 через язык Fore. Свойства и методы для доступа к объекту пользовательского
 класса содержатся в интерфейсе [IMetabaseCustomObject](KeSom.chm::/Interface/IMetabaseCustomObject/IMetabaseCustomObject.htm).
 В объекте пользовательского класса могут храниться любые данные. Рассмотрим
 простые примеры по записи данных в объект пользовательского класса и считыванию
 данных из него. Чтение/запись данных будет производиться из/в файл:


[![](../../Opened.gif)![](../../Closed.gif)Запись данных
 в объект пользовательского класса](javascript:TextPopup(this))


		Sub WriteCustomObject;

		Var

		    MB: IMetabase;

		    CustomObject: IMetabaseCustomObject;

		    CustomWriter: IMetabaseCustomObjectWriter;

		Begin

		    MB := MetabaseClass.Active;

		    // Открываем объект пользовательского класса на редактирование

		    CustomObject := MB.ItemById("OBJ_CUSTOM").Edit As IMetabaseCustomObject;

		    // Создаем объект для записи данных

		    CustomWriter := CustomObject.CreateWriter;

		    // Считываем данные из файла

		    CustomWriter.WriteFromFile("c:\Data.txt");

		    // Сохраняем изменения в объекте пользовательского класса

		    CustomWriter.Save;

		    // Сохраняем изменения в базу репозитория

		    (CustomObject As IMetabaseObject).Save;

		End Sub WriteCustomObject;


[![](../../Opened.gif)![](../../Closed.gif)Чтение данных
 из объекта пользовательского класса](javascript:TextPopup(this))


		Sub ReadCustomObject;

		Var

		    MB: IMetabase;

		    CustomObject: IMetabaseCustomObject;

		    CustomReader: IMetabaseCustomObjectReader;

		Begin

		    MB := MetabaseClass.Active;

		    // Открываем объект пользовательского класса на чтение

		    CustomObject := MB.ItemById("OBJ_CUSTOM").Bind As IMetabaseCustomObject;

		    // Создаем объект для считывания данных

		    CustomReader := CustomObject.CreateReader;

		    // Загружаем данные из базы репозитория в память ПК

		    CustomReader.Load;

		    // Записываем данные в файл

		    CustomReader.ReadToFile("c:\OutData.txt");

		End Sub ReadCustomObject;


## Выполнение операций


Для того, чтобы работа с объектами пользовательских классов в навигаторе
 объектов не отличалась от работы с другими объектами репозитория, в настройках
 класса создайте список [операций](User_Class_Operation.htm)
 и укажите обработчик, в котором расположен класс с реализацией операций.
 Например, для обработки стандартных операций «Открыть»,
 «Редактировать» и каких-либо еще
 двух операций реализация класса может быть следующей:


[![](../../Opened.gif)![](../../Closed.gif)Класс
 с операциями](javascript:TextPopup(this))


		Class Operations: Object

		    Sub Open(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка операции "Открыть"

		    End Sub Open;


		    Sub Edit(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка создания объекта пользовательского класса или операции "Редактировать"

		    End Sub Edit;


		    Sub Delete(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка операции "Удалить"

		    End Sub Delete;


		    Sub Paste(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка операции "Вставить"

		    End Sub Paste;


		    Sub CLS1OP1(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка первой пользовательской операции

		    End Sub CLS1OP1;


		    Sub CLS1OP2(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка второй пользовательской операции

		    End Sub CLS1OP2;

		End Class Operations;


Для записи/чтения данных в объектах пользовательских классов указанные
 выше процедуры можно переписать в обработчики операций:


[![](../../Opened.gif)![](../../Closed.gif)Чтение/запись
 данных](javascript:TextPopup(this))


		Class Operations: Object

		    Sub Open(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка операции "Открыть"

		    End Sub Open;


		    Sub Edit(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка создания объекта пользовательского класса или операции "Редактировать"

		    End Sub Edit;


		    // Запись данных
		 в объект пользовательского класса

		    Sub CLS1OP1(Obj: IMetabaseObjectDescriptor);

		    Var

		        CustomObject: IMetabaseCustomObject;

		        CustomWriter: IMetabaseCustomObjectWriter;

		    Begin

		        CustomObject := Obj.Edit As IMetabaseCustomObject;

		        CustomWriter := CustomObject.CreateWriter;

		        CustomWriter.WriteFromFile("c:\Data.txt");

		        CustomWriter.Save;

		        (CustomObject As IMetabaseObject).Save;

		    End Sub CLS1OP1;


		    // Чтение данных из объекта пользовательского
		 класса и запись их в файл

		    Sub CLS1OP2(Obj: IMetabaseObjectDescriptor);

		    Var

		        CustomObject: IMetabaseCustomObject;

		        CustomReader: IMetabaseCustomObjectReader;

		    Begin

		        CustomObject := Obj.Bind As IMetabaseCustomObject;

		        CustomReader := CustomObject.CreateReader;

		        CustomReader.Load;

		        CustomReader.ReadToFile("c:\OutData.txt");

		    End Sub CLS1OP2;


		End Class Operations;


## Параметрические объекты пользовательского класса


При необходимости объекты пользовательского класса можно сделать параметрическими.
 Для этого через Fore заполните коллекцию [IMetabaseObjectDescriptor.Params](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Params.htm).
 Следующий код может использоваться для создания параметров:


[![](../../Opened.gif)![](../../Closed.gif)Создание параметров](javascript:TextPopup(this))


		Sub CreateParams;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    Params: IMetabaseObjectParams;

		    Param: IMetabaseObjectParam;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemById("ID
		 параметра").Edit;

		    Params := MObj.Params;

		    // Очистка списка параметров

		    Params.Clear;

		    // Создание параметра и настройка его свойств

		    Param := Params.Add;

		    Param.DataType := DbDataType.Integer;

		    Param.Name := "<Наименование
		 параметра>";

		    //...

		    // Создание остальных параметров

		    //...

		    MObj.Save;

		End Sub CreateParams;


Для параметрического объекта перед выполнением операции будет выведено
 окно «[Установка
 значений параметров](uinav.chm::/02_Navigator/General_Principles_of_Work.htm#open_param_object)». После ввода значений и
 нажатия кнопки «ОК» будет вызван
 соответствующий метод-обработчик. Если в диалоге была нажата кнопка «Отмена», то обработчик будет вызван,
 но в него будут переданы пустые значения параметров.


Для обработки операций у параметрических объектов должны быть реализованы
 соответствующие обработчики:


[![](../../Opened.gif)![](../../Closed.gif)Класс с операциями](javascript:TextPopup(this))


		Class Operations: Object

		    Sub Open(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка операции "Открыть"

		    End Sub Open;


		    Sub Edit(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка создания объекта пользовательского класса или операции "Редактировать"

		    End Sub Edit;


		    Sub Delete(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка операции "Удалить"

		    End Sub Delete;


		    Sub Paste(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка операции "Вставить"

		    End Sub Paste;


		    Sub CLS1OP1(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка первой пользовательской операции

		    End Sub CLS1OP1;


		    Sub CLS1OP2(Obj: IMetabaseObjectDescriptor);

		    Begin

		        //
		 Обработка второй пользовательской операции

		    End Sub CLS1OP2;

		    //----------------------------

		    // Для параметрических объектов

		    //----------------------------

		    Sub OpenWithParams(Obj: IMetabaseObjectDescriptor; Params: IMetabaseObjectParamValues);

		    Begin

		        //
		 Обработка операции "Открыть" для параметрических объектов

		    End Sub OpenWithParams;


		    Sub CLS1OP1WithParams(Obj: IMetabaseObjectDescriptor; Params: IMetabaseObjectParamValues);

		    Begin

		        //
		 Обработка первой пользовательской операции для параметрических объектов

		    End Sub CLS1OP1WithParams;


		    Sub CLS1OP2WithParams(Obj: IMetabaseObjectDescriptor; Params: IMetabaseObjectParamValues);

		    Begin

		        //
		 Обработка второй пользовательской операции для параметрических объектов

		    End Sub CLS1OP2WithParams;

		End Class Operations;


См. также:


[Создание
 пользовательских классов](UiNav_Classes_Object.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
