# DataAreaSourcesAdd: Операция

DataAreaSourcesAdd: Операция
-


**


# DataAreaSourcesAdd


## Синтаксис


OpItemKey DataAreaSourcesAdd(string mon, DataAreaSourcesAddArg
 tArg)


## Параметры


mon. Моникёр
 для работы с источниками данных аналитической области данных регламентного
 отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция DataAreaSourcesAdd
 добавляет новый источник данных для аналитической области данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources» для работы
 с источниками данных, а в поле tArg
 параметры добавления нового источника данных.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


В поле tArg.obDesc укажите описание
 куба, который необходимо добавить в качестве источника данных.


## Пример


Ниже приведён пример добавления источника для аналитической области
 данных. В запросе передаётся моникёр для работы с источниками данных и
 описание куба, который будет использоваться в качестве источника данных.
 В ответе приходит ключ созданного источника данных.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DataAreaSourcesAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<cube>
[![](../../minus.gif)](../../#)<obDesc>
  <i>CALC_CUBE</i>  <n>Вычисляемый куб</n>  <k>6962</k>  <c>0</c>  </obDesc>
  </cube>
  </tArg>
  </DataAreaSourcesAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DataAreaSourcesAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">3</k>  </DataAreaSourcesAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DataAreaSourcesAdd" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources",
   "tArg" :
    {
     "cube" :
      {
       "obDesc" :
        {
         "i" : "CALC_CUBE",
         "n" : "Вычисляемый куб",
         "k" : "6962",
         "c" : "0"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "DataAreaSourcesAddResult" :
  {
   "k" : "3"
  }
}


public static OpItemKey AddDataSource(MbId mb, string moniker, string cubeId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Описаниу куба
    var cubeOd = FindObjectById(mb, cubeId);
    //Параметры выполнения операции
    var tAdd = new DataAreaSourcesAdd()
    {
        tArg = new DataAreaSourcesAddArg()
        {
            cube = new CubeDataSource()
            {
                obDesc = new Ob()
                {
                    i = cubeId,
                    n = cubeOd.n,
                    k = cubeOd.k
                }
            }
        },
        mon = moniker + "!DataArea!DataSources"
    };
    //Добаление источника данных
    var result = somClient.DataAreaSourcesAdd(tAdd);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
