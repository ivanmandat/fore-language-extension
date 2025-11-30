# RemoveTabTableStyleByName: Операция

RemoveTabTableStyleByName: Операция
-


**


# RemoveTabTableStyleByName


## Синтаксис


bool RemoveTabTableStyleByName(TabSheetId tTabSheet,
 string styleName)


## Параметры


tTabSheet. Моникёр
 таблицы.


styleName. Наименование удаляемого
 стиля.


## Описание


Операция RemoveTabTableStyleByName
 удаляет стиль по его наименованию.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы, а в поле styleName
 наименование удаляемого стиля. Моникёр может быть сформирован на основании
 моникёра открытого экземпляра объекта, с таблицей которого осуществляется
 работа, по следующим правилам:


	- «Моникёр экземпляра экспресс-отчета»!Tab.
	 Таблица экспресс-отчета (если в экспресс-отчете один лист).


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Tab. Таблица заданного листа экспресс-отчета (если в
	 экспресс-отчете несколько листов).


	- «Моникёр экземпляра рабочей
	 книги»!Tab. Таблица рабочей книги (если в рабочей книге один
	 лист).


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Tab. Таблица заданного листа рабочей
	 книги (если в рабочей книги несколько листов).


	- «Моникёр экземпляра рабочей
	 книги»!CorrTab. Таблица с матрицей корреляции.


	- «Моникёр экземпляра рабочей
	 книги»!CoeffTab. Таблица с коэффициентами уравнения.


	- «Моникёр экземпляра рабочей
	 книги»!WeightsTab. Таблица с матрицей весов.


	- «Моникёр экземпляра регламентного
	 отчета»!Ключ листа. Таблица отдельного листа регламентного
	 отчета.


Результатом выполнения операции будет логическое значение true,
 если удаление стиля завершилось успешно.


## Пример


Ниже приведён пример удаления стиля с указанным наименованием. В запросе
 передаётся моникёр таблицы и наименование удаляемого стиля. В ответе возвращается
 признак успешного удаления.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<RemoveTabTableStyleByName xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>JMHNJCPPENOAGOAEKKAIOMBCNHKFGLBECJGOILNNKEBNHDNH!M!S!POMEOEHPPENOAGOAEHHAFJNMHPFBDKBJEDIHOKONCJJDDJEHC!Sheets!1</id>  </tTabSheet>
  <styleName xmlns="****">EAX table style(изменён)</styleName>  </RemoveTabTableStyleByName>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <RemoveTabTableStyleByNameResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</RemoveTabTableStyleByNameResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveTabTableStyleByName" :
  {
   "tTabSheet" :
    {
     "id" : "JMHNJCPPENOAGOAEKKAIOMBCNHKFGLBECJGOILNNKEBNHDNH!M!S!POMEOEHPPENOAGOAEHHAFJNMHPFBDKBJEDIHOKONCJJDDJEHC!Sheets!1"
    },
   "styleName" : "EAX table style(изменён)"
  }
}

### JSON-ответ:


{
 "RemoveTabTableStyleByNameResult" : "1"
}


public static bool RemoveTabTableStyleByName(string moniker, string sheetKey, string deletedStyleName)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tCopy = new RemoveTabTableStyleByName()
    {
        tTabSheet = new TabSheetId() { id = moniker + "!Sheets!" + sheetKey },
        styleName = deletedStyleName
    };
    // Удаление стиля
    var result = somClient.RemoveTabTableStyleByName(tCopy);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
