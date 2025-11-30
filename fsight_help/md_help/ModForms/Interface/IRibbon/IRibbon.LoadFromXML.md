# IRibbon.LoadFromXML

IRibbon.LoadFromXML
-


# IRibbon.LoadFromXML


## Синтаксис


LoadFromXML(Value: String);


## Параметры


Value. Символьная строка, содержащая
 XML-структуру ленты.


## Описание


Метод LoadFromXML осуществляет
 загрузку и создает визуальную ленту.


## Комментарии


При вызове данного метода на основе передаваемой XML-структуры осуществляется
 формирование визуальной модульной ленты. Из [ресурсов](IRibbon.Resources.htm)
 репозитория будут загружены изображения, которые используются в элементах
 управления.


Структура ленты не должна содержать системных идентификаторов (например,
 ID_APP_EXIT). Такие идентификаторы
 будут заменены на автоматически сгенерированные.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента Ribbon с наименованием
 «Ribbon1». В репозитории имеется документ с идентификатором «RibbonXML»
 и объект «Ресурсы» с идентификатором «RibbonResource». В документе сохранена
 XML-структура ленты, в ресурсе хранятся изображения, которые используют
 элементы управления ленты. Указанная процедура установлена в качестве
 обработчика события OnCreate формы.


			Sub TestFormOnCreate(Sender: Object; Args: IEventArgs);

Var

    MB: IMetabase;

    Doc: IDocument;

    Res: IResourceObject;

    MStream: IMemoryStream;

    TxtRead: ITextReader;

    RibbonXML: String;

Begin

    MB := MetabaseClass.Active;

    Doc := MB.ItemById("RibbonXML").Bind As IDocument;

    Res := MB.ItemById("RibbonResource").Bind As IResourceObject;

    MStream := New MemoryStream.Create;

    Doc.SaveToStream(MStream);

    TxtRead := New TextReader.Create(MStream);

    TxtRead.Encoding := CodePage.UTF8;

    RibbonXML := TxtRead.ReadToEnd;

    Ribbon1.Resources := Res;

    Ribbon1.LoadFromXML(RibbonXML);

End Sub TestFormOnCreate;


При срабатывании события будет осуществлена загрузка и настройка ленты
 в компоненте «Ribbon1».


См. также:


[IRibbon](IRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
