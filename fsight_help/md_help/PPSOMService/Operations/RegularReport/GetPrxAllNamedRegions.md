# GetPrxAllNamedRegions: Операция

GetPrxAllNamedRegions: Операция
-


**


# GetPrxAllNamedRegions


## Синтаксис


PrxAllNamedRegionsResult GetPrxAllNamedRegions(PrxId
 prxMon)


## Параметры


prxMon. Моникёр
 открытого экземпляра регламентного отчёта.


## Описание


Операция GetPrxAllNamedRegions
 получает коллекцию именованных диапазонов, созданных на листах регламентного
 отчёта.


## Комментарии


Для выполнения операции укажите в поле nrMon
 моникёр экземпляра регламентного отчёта. Моникёр может быть получен при
 выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет полученная коллекция именованных
 диапазонов.


## Пример


Ниже приведён пример получения всех именованных диапазонов, созданных
 в регламентном отчёте. В запросе передаётся моникёр открытого экземпляра
 регламентного отчёта. В ответе возвращается полученный список именованных
 диапазонов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPrxAllNamedRegions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<prxMon xmlns="****">
  <id>ILBNJNHKDBCAGOAEGGMCAJHIOKJPOKMEOIOADBDOFONILPAG!M!S!PAJBBFBIKDBCAGOAEJOAGHLNCNALCNCJEOLBLLFIDBFHIGLPO</id>  </prxMon>
  </GetPrxAllNamedRegions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPrxAllNamedRegionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<sar xmlns="****">
[![](../../minus.gif)](../../#)<shk>
  <k>1</k>  </shk>
[![](../../minus.gif)](../../#)<regs>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <left>1</left>  <top>1</top>  <width>10</width>  <height>2</height>  <k>7</k>  <backgroundColor>16054268</backgroundColor>  <backgroundOpacity>0</backgroundOpacity>  <borderColor>0</borderColor>  <borderOpacity>0</borderOpacity>  <borderStyle>0</borderStyle>  <borderWeight>2</borderWeight>  <name>Заголовок</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <left>1</left>  <top>3</top>  <width>10</width>  <height>10</height>  <k>8</k>  <backgroundColor>16054268</backgroundColor>  <backgroundOpacity>0</backgroundOpacity>  <borderColor>0</borderColor>  <borderOpacity>0</borderOpacity>  <borderStyle>0</borderStyle>  <borderWeight>2</borderWeight>  <name>Данные</name>  </it>
  </its>
  </regs>
  </sar>
  </GetPrxAllNamedRegionsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPrxAllNamedRegions" :
  {
   "prxMon" :
    {
     "id" : "ILBNJNHKDBCAGOAEGGMCAJHIOKJPOKMEOIOADBDOFONILPAG!M!S!PAJBBFBIKDBCAGOAEJOAGHLNCNALCNCJEOLBLLFIDBFHIGLPO"
    }
  }
}

### JSON-ответ:


{
 "GetPrxAllNamedRegionsResult" :
  {
   "sar" :
    {
     "shk" :
      {
       "k" : "1"
      },
     "regs" :
      {
       "its" :
        {
         "it" :
          [
            {
             "left" : "1",
             "top" : "1",
             "width" : "10",
             "height" : "2",
             "k" : "7",
             "backgroundColor" : "16054268",
             "backgroundOpacity" : "0",
             "borderColor" : "0",
             "borderOpacity" : "0",
             "borderStyle" : "0",
             "borderWeight" : "2",
             "name" : "Заголовок"
            },
            {
             "left" : "1",
             "top" : "3",
             "width" : "10",
             "height" : "10",
             "k" : "8",
             "backgroundColor" : "16054268",
             "backgroundOpacity" : "0",
             "borderColor" : "0",
             "borderOpacity" : "0",
             "borderStyle" : "0",
             "borderWeight" : "2",
             "name" : "Данные"
            }
          ]
        }
      }
    }
  }
}


public static PrxAllNamedRegionsResult GetPrxAllNamedRegions(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetPrxAllNamedRegions()
    {
        prxMon = new PrxId() { id = moniker }
    };
    // Получение всех именованных диапазонов
    var result = somClient.GetPrxAllNamedRegions(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
