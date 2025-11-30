# GetDm: Операция

GetDm: Операция
-


**


# GetDm


## Синтаксис


DmMethodResult GetDm(DmMethod tArg)


## Параметры


tArg. Параметры метода интеллектуального
 анализа данных.


## Описание


Операция GetDm выполняет интеллектуальный
 анализ данных.


## Комментарии


Для выполнения операции укажите в поле tArg
 входной и выходной источники данных, тип и специфические настройки метода
 интеллектуального анализа. Выходной источник должен быть открыт на редактирование.


Результатом выполнения операции будет моникёр отчёта, в который были
 выгружены результаты интеллектуального анализа, и сообщение об ошибке,
 если при анализе возникли ошибки.


## Пример


Ниже приведён пример применения интеллектуального анализа данных. В
 запросе передаются моникёры источника и приёмника данных, типа используемого
 метода и его настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDm xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<inputDataSource>
  <kind>DmReport</kind>  <moniker>NJGNHPFCGJPLFOAEJIEHJJBIOJAKKBNEKKIELOKLJKFHPBCK!M!S!PMLFKAGGCGJPLFOAELHMPPKJEPKBGHJEEILCNPIBPFFNNKOJO</moniker>[![](../../minus.gif)](../../#)<reportDataSource>
  <sheetIndex>0</sheetIndex>[![](../../minus.gif)](../../#)<range>
  <left>0</left>  <top>0</top>  <width>7</width>  <height>10</height>  </range>
  </reportDataSource>
  <dataInColumns>true</dataInColumns>  </inputDataSource>
[![](../../minus.gif)](../../#)<outputDataSource>
  <kind>DmReport</kind>  <moniker>NJGNHPFCGJPLFOAEJIEHJJBIOJAKKBNEKKIELOKLJKFHPBCK!M!S!POBLIMLGCGJPLFOAEFBNGINPNNJMKKGNEFLDNBMEGFJGOOMKN</moniker>  <dataInColumns>true</dataInColumns>  </outputDataSource>
  <kind>KmodesClusterAnalysis</kind>[![](../../minus.gif)](../../#)<details>
[![](../../minus.gif)](../../#)<kmodesClusterAnalysis>
[![](../../minus.gif)](../../#)<attributes>
[![](../../minus.gif)](../../#)<it>
  <index>0</index>  </it>
[![](../../minus.gif)](../../#)<it>
  <index>3</index>  </it>
  </attributes>
  <categoriesCount>2</categoriesCount>  </kmodesClusterAnalysis>
  </details>
  </tArg>
  </GetDm>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDmResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <outputReport xmlns="****">NJGNHPFCGJPLFOAEJIEHJJBIOJAKKBNEKKIELOKLJKFHPBCK</outputReport>  </GetDmResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDm" :
  {
   "tArg" :
    {
     "inputDataSource" :
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
           "width" : "7",
           "height" : "10"
          }
        },
       "dataInColumns" : "true"
      },
     "outputDataSource" :
      {
       "kind" : "DmReport",
       "moniker" : "NJGNHPFCGJPLFOAEJIEHJJBIOJAKKBNEKKIELOKLJKFHPBCK!M!S!POBLIMLGCGJPLFOAEFBNGINPNNJMKKGNEFLDNBMEGFJGOOMKN",
       "dataInColumns" : "true"
      },
     "kind" : "KmodesClusterAnalysis",
     "details" :
      {
       "kmodesClusterAnalysis" :
        {
         "attributes" :
          {
           "it" :
            [
              {
               "index" : "0"
              },
              {
               "index" : "3"
              }
            ]
          },
         "categoriesCount" : "2"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetDmResult" :
  {
   "outputReport" : "NJGNHPFCGJPLFOAEJIEHJJBIOJAKKBNEKKIELOKLJKFHPBCK"
  }
}


public static DmMethodResult GetDm(string inputReportMoniker, string outputReportMoniker)
{
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Задаём параметры выполнения операции
    var tGet = new GetDm()
    {
        tArg = new DmMethod()
        {
            kind = DmMethodKind.KmodesClusterAnalysis,
            inputDataSource = new DmDataSource()
            {
                kind = DmDataSourceKind.DmReport,
                dataInColumns = true,
                moniker = inputReportMoniker,
                reportDataSource = new DmReportDataSource()
                {
                    sheetIndex = 0,
                    range = new TabRange()
                    {
                        left = 0,
                        top = 0,
                        height = 10,
                        width = 7
                    }
                }
            },
            outputDataSource = new DmDataSource()
            {
                kind = DmDataSourceKind.DmReport,
                dataInColumns = true,
                moniker = outputReportMoniker
            },
            details = new DmMethodDetails()
            {
                kmodesClusterAnalysis = new DmKmodesClusterAnalysis()
                {
                    attributes = new DmField[] { new DmField() { index = 0 }, new DmField() { index = 3 } },
                    categoriesCount = 2
                }
            }
        }
    };
    // Интеллектуальный анализ данных
    var result = somClient.GetDm(tGet);
    return result;
}


См. также:


[Работа
 с контейнером моделирования](ModelingContainer_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
