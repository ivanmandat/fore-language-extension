# SetDataAreaVirtualSources: Операция

SetDataAreaVirtualSources: Операция
-


**


# SetDataAreaVirtualSources


## Синтаксис


bool SetDataAreaVirtualSources(string mon, DataAreaVirtualSourcesArg
 tArg)


## Параметры


mon. Моникёр
 для работы с источником аналитической области данных.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDataAreaVirtualSources
 изменяет виртуальный куб, являющийся источником аналитической области
 данных.


## Комментарии


Операция позволяет изменить настройки виртуального куба, который формируется
 при объединении нескольких источников. Для выполнения операции укажите
 в поле mon моникёр открытого
 экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!ключ
 источника» для работы с источниками данных, а в поле tArg
 обновлённые настройки виртуального куба, которые необходимо применить.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция возвращает значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример переименования виртуального куба, являющегося источником
 данных в регламентном отчёте. В запросе передаётся моникёр для работы
 с источниками данных, ключ источника и новое наименование. В ответе возвращается
 признак успешного применения изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDataAreaVirtualSources xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">EJGDNHFGAFODGOAEPGGDJLEMMFEACFBEGLGPIKOCPBNJCAEK!M!S!PHDNFLIFGAFODGOAELPAIPPCKGIOGDIDEPJKPBGFCDIIBHOPO!DataArea!DataSources!1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<virtualCubeInfo>
  <k>0</k>  <n>Объединённые источники</n>  </virtualCubeInfo>
  </tArg>
  </SetDataAreaVirtualSources>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDataAreaVirtualSourcesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDataAreaVirtualSourcesResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDataAreaVirtualSources" :
  {
   "mon" : "EJGDNHFGAFODGOAEPGGDJLEMMFEACFBEGLGPIKOCPBNJCAEK!M!S!PHDNFLIFGAFODGOAELPAIPPCKGIOGDIDEPJKPBGFCDIIBHOPO!DataArea!DataSources!1",
   "tArg" :
    {
     "virtualCubeInfo" :
      {
       "k" : "0",
       "n" : "Объединённые источники"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDataAreaVirtualSourcesResult" : "1"
}


public static bool ChangePrxVirtualDataSource(string moniker, uint dataSourceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDataAreaVirtualSources()
    {
        tArg = new DataAreaVirtualSourcesArg()
        {
            virtualCubeInfo = new ItEntityEx()
            {
                n = "Объединённые источники" // Новое наименование виртуального куба
            }
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey
    };
    // Изменение параметров виртуального куба
    var result = somClient.SetDataAreaVirtualSources(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
