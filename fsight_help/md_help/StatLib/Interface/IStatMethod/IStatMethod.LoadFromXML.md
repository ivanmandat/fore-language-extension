# IStatMethod.LoadFromXML

IStatMethod.LoadFromXML
-


# IStatMethod.LoadFromXML


## Синтаксис


LoadFromXML(Element: [IXmlDomElement](ModXml.chm::/develop.htm));


## Параметры


Element.
 XML-код, из которого будут загружены параметры метода.


## Описание


Метод LoadFromXML осуществляет
 загрузку настроек статистического метода из XML-кода.


## Пример


Для выполнения примера предполагается наличие файла «C:\NonLinear.xml»,
 содержащего параметры расчета системы нелинейных уравнений в виде XML-кода.
 Параметры должны содержаться в разделе «Root».


Добавьте ссылки на системные сборки: Stat, Xml.


			Sub UserProc;

Var

    XmlDoc: IXmlDomDocument3;

    el: IXmlDomElement;

    Eqs: ISmNonLinearEquations;

Begin

    Eqs := New SmNonLinearEquations.Create As ISmNonLinearEquations;

    XmlDoc := New DOMDocument60.Create;

    XmlDoc.load("C:\NonLinear.xml");

    el := XmlDoc.selectSingleNode("Root") As IXmlDomElement;

    Eqs.LoadFromXML(el);

End Sub UserProc;


После выполнения примера параметры расчета системы нелинейных уравнений,
 сохраненные в виде XML-кода, будут загружены из файла «C:\NonLinear.xml».


См. также:


[IStatMethod](IStatMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
