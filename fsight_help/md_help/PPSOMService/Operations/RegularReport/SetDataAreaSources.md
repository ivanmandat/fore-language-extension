# SetDataAreaSources: Операция

SetDataAreaSources: Операция
-


**


# SetDataAreaSources


## Синтаксис


bool SetDataAreaSources(string mon, DataAreaSources
 tArg)


## Параметры


mon. Моникёр
 для работы с источниками данных аналитической области данных регламентного
 отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDataAreaSources
 изменяет источники данных аналитической области данных.


## Комментарии


Операция позволяет изменить настройки источников данных, их срезов и
 визуализаторов, которые отображают данные срезов.


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources» для работы
 с источниками данных, а в поле tArg
 обновлённые метаданные источников, которые необходимо применить. Для элементов,
 параметры которых меняются, также должны быть указаны ключи.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция возвращает значение true,
 если изменение завершилось успешно.


## Пример


Ниже приведён пример переименования среза у источника данных. В запросе
 передаётся моникёр для работы с источниками данных, ключ источника для
 которого производятся изменения, ключ среза и новое наименование среза.
 В ответе возвращается признак успешного применения изменений.


	SOAP JSONC#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDataAreaSources xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>[![](../../minus.gif)](../../#)<slices>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <n>Срез данных</n>  </it>
  </its>
  </slices>
  </it>
  </its>
  </tArg>
  </SetDataAreaSources>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDataAreaSourcesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDataAreaSourcesResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDataAreaSources" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "1",
           "slices" :
            {
             "its" :
              {
               "it" :
                [
                  {
                   "k" : "1",
                   "n" : "Срез данных"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SetDataAreaSourcesResult" : "1"
}


public static bool ChangePrxDataSource(string moniker, uint dataSourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetDataAreaSources()
    {
        tArg = new DataAreaSources()
        {
            its = new DataAreaSource[1]
            {
                new DataAreaSource()
                {
                    k = dataSourceKey,
                    slices = new DataAreaSlices()
                    {
                        its = new DataAreaSlice[1]
                        {
                            new DataAreaSlice()
                            {
                                k = sliceKey,
                                n = "Срез данных" //Новое наименование для среза данных
                            }
                        }
                    }
                }
            }
        },
        mon = moniker + "!DataArea!DataSources"
    };
    //Изменение параметров источниках данных
    var result = somClient.SetDataAreaSources(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
