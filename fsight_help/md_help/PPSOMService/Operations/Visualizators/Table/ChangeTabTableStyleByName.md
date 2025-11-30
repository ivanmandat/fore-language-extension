# ChangeTabTableStyleByName: Операция

ChangeTabTableStyleByName: Операция
-


**


# ChangeTabTableStyleByName


## Синтаксис


bool ChangeTabTableStyleByName(TabSheetId tTabSheet,
 TabTableStyle tArg, string newName)


## Параметры


tTabSheet. Моникёр
 таблицы.


tArg. Обновлённые настройки
 стиля, которые необходимо применить.


newName. Новое наименование,
 которое будет установлено для стиля.


## Описание


Операция ChangeTabTableStyleByName
 изменяет настройки стиля с указанным наименованием.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы, а в поле tArg
 обновлённые настройки стиля. Моникёр может быть сформирован на основании
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


Наименование изменяемого стиля указывается в поле tArg.Name.
 Если стиль необходимо переименовать, то задайте новое имя в поле newName.


Результатом выполнения операции будет логическое значение true,
 если изменение стиля завершилось успешно.


## Пример


Ниже приведён пример изменения стиля таблицы. В запросе передаётся моникёр
 таблицы, наименование изменяемого стиля и новые настройки - устанавливается
 чередующийся стиль. Также для стиля задаётся новое наименование. В ответе
 возвращается признак успешного изменения настроек стиля.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ChangeTabTableStyleByName xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>JMHNJCPPENOAGOAEKKAIOMBCNHKFGLBECJGOILNNKEBNHDNH!M!S!POMEOEHPPENOAGOAEHHAFJNMHPFBDKBJEDIHOKONCJJDDJEHC!Sheets!1</id>  </tTabSheet>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <Name>EAX table style</Name>  <PredefinedStyle>DarkRed</PredefinedStyle>  </tArg>
  <newName xmlns="****">EAX table style(изменён)</newName>  </ChangeTabTableStyleByName>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <ChangeTabTableStyleByNameResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</ChangeTabTableStyleByNameResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ChangeTabTableStyleByName" :
  {
   "tTabSheet" :
    {
     "id" : "JMHNJCPPENOAGOAEKKAIOMBCNHKFGLBECJGOILNNKEBNHDNH!M!S!POMEOEHPPENOAGOAEHHAFJNMHPFBDKBJEDIHOKONCJJDDJEHC!Sheets!1"
    },
   "tArg" :
    {
     "Name" : "EAX table style",
     "PredefinedStyle" : "DarkRed"
    },
   "newName" : "EAX table style(изменён)"
  }
}

### JSON-ответ:


{
 "ChangeTabTableStyleByNameResult" : "1"
}


public static bool ChangeTabTableStyleByName(string moniker, string sheetKey, string styleName)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tChange = new ChangeTabTableStyleByName()
    {
        tTabSheet = new TabSheetId() { id = moniker + "!Sheets!" + sheetKey },
        tArg = new TabTableStyle()
        {
            Name = styleName,
            PredefinedStyle = TabTablePredefinedStyle.DarkRed
        },
        newName = styleName + "(изменён)"
    };
    // Изменение стиля
    var result = somClient.ChangeTabTableStyleByName(tChange);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
