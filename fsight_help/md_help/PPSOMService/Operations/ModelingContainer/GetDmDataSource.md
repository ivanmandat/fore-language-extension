# GetDmDataSource: Операция

GetDmDataSource: Операция
-


**


# GetDmDataSource


## Синтаксис


DmDataSourceResult GetDmDataSource(DmDataSource
 tArg)


## Параметры


tArg. Источник данных, о котором
 необходимо получить информацию.


## Описание


Операция GetDmDataSource получает
 информацию об источнике для интеллектуального анализа данных.


## Комментарии


Для выполнения операции укажите в поле tArg
 общую информацию об источнике.


Результатом выполнения операции будет информация об имеющихся в источнике
 данных для интеллектуального анализа.


## Пример


Ниже приведён пример получения информации об источнике для интеллектуального
 анализа. В запросе передаётся моникёр источника и информация о расположении
 данных в нём. В ответе возвращается информация о данных в источнике.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDmDataSource xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <kind>DmReport</kind>  <moniker>NJGNHPFCGJPLFOAEJIEHJJBIOJAKKBNEKKIELOKLJKFHPBCK!M!S!PMLFKAGGCGJPLFOAELHMPPKJEPKBGHJEEILCNPIBPFFNNKOJO</moniker>[![](../../minus.gif)](../../#)<reportDataSource>
  <sheetIndex>0</sheetIndex>[![](../../minus.gif)](../../#)<range>
  <left>0</left>  <top>0</top>  <width>8</width>  <height>10</height>  </range>
  </reportDataSource>
  <dataInColumns>true</dataInColumns>  </tArg>
  </GetDmDataSource>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDmDataSourceResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<reportDataSource xmlns="****">
[![](../../minus.gif)](../../#)<range>
  <left>0</left>  <top>0</top>  <width>8</width>  <height>10</height>  </range>
  </reportDataSource>
  <recordCount xmlns="****">9</recordCount>  <fieldCount xmlns="****">8</fieldCount>[![](../../minus.gif)](../../#)<fieldNames xmlns="****">
  <s>GENDER</s>  <s>EDUCATION</s>  <s>MARITAL_STATUS</s>  <s>HOMEA2000OWNER</s>  <s>COMMUTEA2000DISTANCE</s>  <s>PURCHASEDA2000BIKE</s>  <s>INCOME</s>  <s>AGE</s>  </fieldNames>
  </GetDmDataSourceResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDmDataSource" :
  {
   "tArg" :
    {
     "kind" : "DmReport",
     "moniker" : "NJGNHPFCGJPLFOAEJIEHJJBIOJAKKBNEKKIELOKLJKFHPBCK!M!S!PMLFKAGGCGJPLFOAELHMPPKJEPKBGHJEEILCNPIBPFFNNKOJO",
     "reportDataSource" :
      {
       "sheetIndex" : "0",
       "range" :
        {
         "left" : "0",
         "top" : "0",
         "width" : "8",
         "height" : "10"
        }
      },
     "dataInColumns" : "true"
    }
  }
}

### JSON-ответ:


{
 "GetDmDataSourceResult" :
  {
   "reportDataSource" :
    {
     "range" :
      {
       "left" : "0",
       "top" : "0",
       "width" : "8",
       "height" : "10"
      }
    },
   "recordCount" : "9",
   "fieldCount" : "8",
   "fieldNames" :
    {
     "s" :
      [
        "GENDER",
        "EDUCATION",
        "MARITAL_STATUS",
        "HOMEA2000OWNER",
        "COMMUTEA2000DISTANCE",
        "PURCHASEDA2000BIKE",
        "INCOME",
        "AGE"
      ]
    }
  }
}


public static DmDataSourceResult GetDmDataSource(string prxMoniker)
{
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Задаём параметры выполнения операции
    var tGet = new GetDmDataSource()
    {
        tArg = new DmDataSource()
        {
            kind = DmDataSourceKind.DmReport,
            dataInColumns = true,
            moniker = prxMoniker,
            reportDataSource = new DmReportDataSource()
            {
                sheetIndex = 0,
                range = new TabRange()
                {
                    left = 0,
                    top = 0,
                    height = 10,
                    width = 8
                }
            }
        }
    };
    // Получение информации об источнике для интеллектуального анализа данных
    var result = somClient.GetDmDataSource(tGet);
    return result;
}


См. также:


[Работа
 с контейнером моделирования](ModelingContainer_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
