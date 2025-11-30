# IStatMethod.SaveToXML

IStatMethod.SaveToXML
-


# IStatMethod.SaveToXML


## Синтаксис


SaveToXML(Element: [IXmlDomElement](ModXml.chm::/develop.htm));


## Параметры


Element. Объект, в который
 будут сохранены параметры метода в виде XML-кода.


## Описание


Метод SaveToXML осуществляет
 выгрузку настроек статистического метода в XML-код.


## Пример


Добавьте ссылки на системные сборки: Stat, Xml.


			Sub UserProc;

Var

    XmlDoc: IXmlDomDocument3;

    el: IXmlDomElement;

    Eqs: ISmNonLinearEquations;

Begin

    Eqs := New SmNonLinearEquations.Create As ISmNonLinearEquations;

    XmlDoc := New FreeThreadedDOMDocument60.Create;

    el := XmlDoc.createElement("Root");

    XmlDoc.appendChild(el);

    Eqs.SaveToXML(el);

    XmlDoc.save("C:\NonLinear.xml");

End Sub UserProc;


После выполнения примера параметры расчета системы нелинейных уравнений
 будут созданы и сохранены в файл «C:\NonLinear.xml» в виде Xml-кода.


См. также:


[IStatMethod](IStatMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
