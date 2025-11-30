# GetDashboardMeta: Операция

GetDashboardMeta: Операция
-


**


# GetDashboardMeta


## Синтаксис


DashboardMetaResult GetDashboardMeta(string mon,
 DashboardMetaArg tArg)


## Параметры


mon. Моникёр
 открытого экземпляра информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDashboardMeta получает
 метаданные информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели, а в поле tArg.meta
 пустые значения или значения по умолчанию для тех полей с метаданными,
 значения которых необходимо получить. Моникёр может быть получен при выполнении
 операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будут полученные метаданные информационной
 панели.


## Пример


Ниже приведён пример получения списка источников данных и визуальных
 настроек информационной панели. В запросе передаётся моникёр открытого
 экземпляра информационной панели и список получаемых полей. В ответе возвращается
 полученная информация.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDashboardMeta xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<sources>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>[![](../../minus.gif)](../../#)<descr>
  <i />
  <n />
  <k>-1</k>  <c>-1</c>  </descr>
  <supportRemoveFields>true</supportRemoveFields>  </it>
  </its>
  </sources>
  <viewSettings />
  </meta>
  </tArg>
  </GetDashboardMeta>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDashboardMetaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<sources>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>[![](../../minus.gif)](../../#)<descr ds="****" isShortcut="**0**" isLink="**0**" ver="**23**" hf="**0**">
  <i>CUBE_SEP</i>  <n>Куб социально-экономических показателей</n>  <k>10206</k>  <c>1281</c>  <p>9698</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </descr>
  <supportRemoveFields>0</supportRemoveFields>  </it>
  </its>
  </sources>
  <viewSettings>{"version":"2","isDataAndFieldsVisible":true,"isSettingsVisible":false,"zoom":0.75,"visibleArea":{"x":-200.17760487144778,"y":-93.49644790257105,"height":838,"width":771,"offsetX":560,"offsetY":48}}</viewSettings>  </meta>
  </GetDashboardMetaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDashboardMeta" :
  {
   "mon" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI",
   "tArg" :
    {
     "meta" :
      {
       "sources" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "-1",
               "descr" :
                {
                 "i" : "",
                 "n" : "",
                 "k" : "-1",
                 "c" : "-1"
                },
               "supportRemoveFields" : "true"
              }
            ]
          }
        },
       "viewSettings" : ""
      }
    }
  }
}

### JSON-ответ:


{
 "GetDashboardMetaResult" :
  {
   "id" :
    {
     "id" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI"
    },
   "meta" :
    {
     "sources" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "descr" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "23",
               "@hf" : "0",
               "i" : "CUBE_SEP",
               "n" : "Куб социально-экономических показателей",
               "k" : "10206",
               "c" : "1281",
               "p" : "9698",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0",
               "trackElementDependents" : "0"
              },
             "supportRemoveFields" : "0"
            }
          ]
        }
      },
     "viewSettings" : "{"version":"2","isDataAndFieldsVisible":true,"isSettingsVisible":false,"zoom":0.75,"visibleArea":{"x":-200.17760487144778,"y":-93.49644790257105,"height":838,"width":771,"offsetX":560,"offsetY":48}}"
    }
  }
}


public static DashboardMetaResult GetDashboardMeta(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDashboardMeta()
    {
        tArg = new DashboardMetaArg()
        {
            meta = new DashboardMetaData()
            {
                sources = new DashboardSources()
                {
                    its = new DashboardSource[]
                    {
                        new DashboardSource()
                        {
                            k = uint.MaxValue,
                            descr = new Od()
                            {
                                c = uint.MaxValue,
                                i = string.Empty,
                                k = uint.MaxValue,
                                n = string.Empty
                            },
                            supportRemoveFields = true
                        }
                    }
                },
                viewSettings = string.Empty
            }
        },
        // Моникёр открытого экземпляра информационной панели
        mon = moniker
    };
    // Получение информации об информационной панели
    var result = somClient.GetDashboardMeta(tGet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
