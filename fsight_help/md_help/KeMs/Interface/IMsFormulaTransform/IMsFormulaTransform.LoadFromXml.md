# IMsFormulaTransform.LoadFromXml

IMsFormulaTransform.LoadFromXml
-


# IMsFormulaTransform.LoadFromXml


## Синтаксис


LoadFromXml(Xml: [IXMLDOMElement](ModXml.chm::/develop.htm));


## Параметры


Xml. Объект,
 из которого будут загружены параметры модели.


## Описание


Метод LoadFromXml загружает
 параметры модели из XML.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки «Button1» и компонента Memo с идентификатором «Memo1». В компоненте
 «Memo1» должны содержаться параметры модели в виде XML-кода.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    node: IXmlDomElement;

    Transform: IMsFormulaTransform;

    cl: FreeThreadedDOMDocument60;

    ActiveMetabase: IMetabase;

Begin

    cl := New FreeThreadedDOMDocument60.Create;

    cl.loadXML(Memo1.Text);

    node := cl.documentElement;

    ActiveMetabase := MetabaseClass.Active;

    Transform := New MsFormulaTransform.Create(ActiveMetabase);

    Transform.LoadFromXml(node);

End Sub Button1OnClick;


После выполнения примера, в переменную «Transform» будут загружены параметры
 модели.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
