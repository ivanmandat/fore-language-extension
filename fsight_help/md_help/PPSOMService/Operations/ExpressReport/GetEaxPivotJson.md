# GetEaxPivotJson: Операция

GetEaxPivotJson: Операция
-


**


# GetEaxPivotJson


## Синтаксис


string GetEaxPivotJson(EaxId tEax, PivotJson tArg)


## Параметры


tEax. Моникёр
 открытого экземпляра экспресс-отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetEaxPivotJson получает
 JSON-представление элементов таблицы экспресс-отчёта.


## Комментарии


Для выполнения операции укажите в поле tEax
 моникёр открытого экземпляра экспресс-отчёта, а в поле tArg
 параметры формирования JSON-представления. Моникёр может быть получен
 при выполнении операции [OpenEax](OpenEax.htm).


Результатом работы операции будет строка с полученным JSON-представлением
 элементов таблицы.


## Пример


Ниже приведён пример получения JSON-представления элементов таблицы
 экспресс-отчёта.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetEaxPivotJson xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tEax xmlns="****">
  <id>CNEJBLJFFPJPFOAENJKOCMNODGGKOPNECKGKNFDEELFBPCOD!M!S!EMIBJLOJFFPJPFOAEBHBAAPJMCFCCKOAEELHMJNJGPCFHCKPA</id>  </tEax>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <topHeader>true</topHeader>  <leftHeader>true</leftHeader>[![](../../minus.gif)](../../#)<cells>
  <ev>false</ev>  </cells>
  </tArg>
  </GetEaxPivotJson>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <GetEaxPivotJsonResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">{"topHeader":{"slots":[{"dimKey":112,"elements":[{"name":"2000","level":0},{"name":"2001","level":0},{"name":"2002","level":0},{"name":"2003","level":0}]}]},"leftHeader":{"slots":[{"dimKey":208,"elements":[{"name":"Германия","level":0},{"name":"Франция","level":0}]}]},"cells":[{"row":0,"col":0,"value":2.315848008368527},{"row":0,"col":1,"value":2.0709973516171365},{"row":0,"col":2,"value":1.8465508876605656},{"row":0,"col":3,"value":1.528585055550339},{"row":1,"col":0,"value":1.6321462148570773},{"row":1,"col":1,"value":1.836188412473067},{"row":1,"col":2,"value":1.5811356838395203},{"row":1,"col":3,"value":1.656376233638213}]}</GetEaxPivotJsonResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetEaxPivotJson" :
  {
   "tEax" :
    {
     "id" : "CNEJBLJFFPJPFOAENJKOCMNODGGKOPNECKGKNFDEELFBPCOD!M!S!EMIBJLOJFFPJPFOAEBHBAAPJMCFCCKOAEELHMJNJGPCFHCKPA"
    },
   "tArg" :
    {
     "topHeader" : "true",
     "leftHeader" : "true",
     "cells" :
      {
       "ev" : "false"
      }
    }
  }
}

### JSON-ответ:


{
 "GetEaxPivotJsonResult" : "{"topHeader":{"slots":[{"dimKey":112,"elements":[{"name":"2000","level":0},{"name":"2001","level":0},
{"name":"2002","level":0},{"name":"2003","level":0}]}]},"leftHeader":{"slots":[{"dimKey":208,"elements":[{"name":"Германия","level":0},
{"name":"Франция","level":0}]}]},"cells":[{"row":0,"col":0,"value":2.315848008368527},{"row":0,"col":1,"value":2.0709973516171365},
{"row":0,"col":2,"value":1.8465508876605656},{"row":0,"col":3,"value":1.528585055550339},{"row":1,"col":0,"value":1.6321462148570773},
{"row":1,"col":1,"value":1.836188412473067},{"row":1,"col":2,"value":1.5811356838395203},{"row":1,"col":3,"value":1.656376233638213}]}"
}


public static string GetEaxPivotJson(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetEaxPivotJson()
    {
        tArg = new PivotJson()
        {
            leftHeader = true,
            topHeader = true,
            cells = new PivotJsonCells()
            {
                ev = false
            }
        },
        tEax = new EaxId() { id = moniker }
    };
    // Получение JSON-представления
    var result = somClient.GetEaxPivotJson(tGet);
    return result;
}


См. также:


[Работа
 с экспресс-отчётами](ExpressReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
