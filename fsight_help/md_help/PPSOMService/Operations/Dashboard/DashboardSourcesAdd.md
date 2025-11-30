# DashboardSourcesAdd: Операция

DashboardSourcesAdd: Операция
-


**


# DashboardSourcesAdd


## Синтаксис


DashboardSources DashboardSourcesAdd(string mon,
 DashboardSourcesAddArg tArg)


## Параметры


mon. Моникёр
 для работы с источниками данных информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция DashboardSourcesAdd
 добавляет источники данных для информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра информационной панели с постфиксом «!Sources».
 Моникёр может быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет обновлённый список источников
 данных информационной панели.


## Пример


Ниже приведён пример добавления источника данных для информационной
 панели. В запросе передаётся моникёр для работы с источниками данных и
 ключ объекта репозитория, который будет выступать в качестве источника
 данных. В ответе возвращается обновлённый список источников информационной
 панели.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardSourcesAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Sources</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<keys>
  <it>74966</it>  </keys>
  </tArg>
  </DashboardSourcesAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DashboardSourcesAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <k>1</k>[![](../../minus.gif)](../../#)<descr ds="****" isShortcut="**0**" isLink="**0**" ver="**23**" hf="**0**">
  <i>CUBE_SEP</i>  <n>Куб социально-экономических показателей</n>  <k>10206</k>  <c>1281</c>  <p>9698</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </descr>
  <supportRemoveFields>0</supportRemoveFields>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>[![](../../minus.gif)](../../#)<descr ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>CUBE_SEP_COPY8</i>  <n>Куб для агрегации</n>  <k>74966</k>  <c>1281</c>  <p>9698</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </descr>
  <supportRemoveFields>0</supportRemoveFields>  </it>
  </its>
  </DashboardSourcesAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardSourcesAdd" :
  {
   "mon" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Sources",
   "tArg" :
    {
     "keys" :
      {
       "it" : "74966"
      }
    }
  }
}

### JSON-ответ:


{
 "DashboardSourcesAddResult" :
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
        },
        {
         "k" : "2",
         "descr" :
          {
           "@ds" : "",
           "@isShortcut" : "0",
           "@isLink" : "0",
           "@ver" : "1",
           "@hf" : "0",
           "i" : "CUBE_SEP_COPY8",
           "n" : "Куб для агрегации",
           "k" : "74966",
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
  }
}


public static DashboardSources DashboardSourcesAdd(string moniker, uint[] sourcesKeys)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new DashboardSourcesAdd()
    {
        tArg = new DashboardSourcesAddArg()
        {
            keys = sourcesKeys
        },
        // Моникёр для работы с источниками данных информационной панели
        mon = moniker + "!Sources"
    };
    // Добавление источников данных
    var result = somClient.DashboardSourcesAdd(tAdd);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
