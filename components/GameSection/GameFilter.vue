<template>


  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">


      <v-card>
        <v-container>
          <v-btn v-for="(filter, filterIndex) in dynamicFilters" :key="filterIndex"
                 @click="removeFilter(filterIndex)" small shaped color="green" class="mb-1">
            X {{filter.operator}}: {{filter.field}}  {{filter.condition}}  {{filter.value}}
          </v-btn>
        </v-container>


      </v-card>

      <v-card>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="12"
            >
              <h3>Add Filter</h3>
              <v-select
                v-model="newFilter.operator"
                :items="['AND','OR']"
                label="And/OR"
              ></v-select>

              <v-select
                v-model="newFilter.field"
                :items="['name','rating']"
                label="Field"
              ></v-select>

              <v-select
                v-model="newFilter.condition"
                :items="['contain','==','!=','<=','>=']"
                label="Condition"
              ></v-select>
              <v-text-field
                v-model="newFilter.value"
                label="Value"
                placeholder=""
              ></v-text-field>
              <v-btn @click="addFilter(newFilter)" color="blue">
                Add Filter
              </v-btn>
            </v-col>

          </v-row>

        </v-container>
      </v-card>
      <v-card>

        <v-card-text>

          <v-form>
<!--            <v-container>-->
<!--              <v-row>-->

<!--                <v-card-title>Filter results</v-card-title>-->

<!--                <v-col v-for="(filter, filterIndex) in dynamicFilters" :key="filterIndex"-->
<!--                  cols="12"-->
<!--                  sm="12"-->
<!--                  md="12"-->
<!--                >-->
<!--                  <h3>Filter {{filterIndex}}</h3>-->
<!--                  <v-select-->
<!--                    v-model="filter.operator"-->
<!--                    :items="['AND','OR']"-->
<!--                    label="Standard"-->
<!--                    solo-inverted-->
<!--                  ></v-select>-->

<!--                  <v-select-->
<!--                    v-model="filter.field"-->
<!--                    :items="['name','rating']"-->
<!--                    label="Standard"-->
<!--                    solo-inverted-->
<!--                  ></v-select>-->

<!--                  <v-select-->
<!--                    v-model="filter.condition"-->
<!--                    :items="['contain','==','!=','<=','>=']"-->
<!--                    label="Standard"-->
<!--                    solo-inverted-->
<!--                  ></v-select>-->
<!--                  <v-text-field-->
<!--                    v-model="filter.value"-->
<!--                    label=""-->
<!--                    placeholder=""-->
<!--                    solo-inverted-->

<!--                  ></v-text-field>-->
<!--                </v-col>-->


<!--&lt;!&ndash;                <v-col&ndash;&gt;-->
<!--&lt;!&ndash;                  cols="12"&ndash;&gt;-->
<!--&lt;!&ndash;                  sm="12"&ndash;&gt;-->
<!--&lt;!&ndash;                  md="12"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <h3>Name (contains)</h3>&ndash;&gt;-->
<!--&lt;!&ndash;                  <v-text-field&ndash;&gt;-->
<!--&lt;!&ndash;                    v-model="searchParams.name"&ndash;&gt;-->
<!--&lt;!&ndash;                    label=""&ndash;&gt;-->
<!--&lt;!&ndash;                    placeholder=""&ndash;&gt;-->
<!--&lt;!&ndash;                    solo-inverted&ndash;&gt;-->

<!--&lt;!&ndash;                  ></v-text-field>&ndash;&gt;-->
<!--&lt;!&ndash;                </v-col>&ndash;&gt;-->


<!--&lt;!&ndash;                <v-col&ndash;&gt;-->
<!--&lt;!&ndash;                  cols="12"&ndash;&gt;-->
<!--&lt;!&ndash;                  sm="12"&ndash;&gt;-->
<!--&lt;!&ndash;                  md="12"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <h3>Minimum Score</h3>&ndash;&gt;-->
<!--&lt;!&ndash;                  <v-text-field&ndash;&gt;-->
<!--&lt;!&ndash;                    v-model="searchParams.score"&ndash;&gt;-->
<!--&lt;!&ndash;                    label=""&ndash;&gt;-->
<!--&lt;!&ndash;                    placeholder="1-10"&ndash;&gt;-->
<!--&lt;!&ndash;                    solo-inverted&ndash;&gt;-->
<!--&lt;!&ndash;                    type="number"&ndash;&gt;-->
<!--&lt;!&ndash;                    min="0"&ndash;&gt;-->
<!--&lt;!&ndash;                    max="10"&ndash;&gt;-->
<!--&lt;!&ndash;                  ></v-text-field>&ndash;&gt;-->
<!--&lt;!&ndash;                </v-col>&ndash;&gt;-->

<!--&lt;!&ndash;                <v-col&ndash;&gt;-->
<!--&lt;!&ndash;                  cols="12"&ndash;&gt;-->
<!--&lt;!&ndash;                  sm="12"&ndash;&gt;-->
<!--&lt;!&ndash;                  md="12"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <h3>Order By</h3>&ndash;&gt;-->

<!--&lt;!&ndash;                  <v-row>&ndash;&gt;-->
<!--&lt;!&ndash;                    <v-col cols="3" md="4" class="pr-0">&ndash;&gt;-->
<!--&lt;!&ndash;                      <v-btn v-if="orderBy.order === 'desc'" @click="orderBy.order = 'asc'" color="blue" block height="48">&ndash;&gt;-->
<!--&lt;!&ndash;                        <v-icon v-if="true" aria-hidden="false">&ndash;&gt;-->
<!--&lt;!&ndash;                          mdi-arrow-down-thick&ndash;&gt;-->
<!--&lt;!&ndash;                        </v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;                      </v-btn>&ndash;&gt;-->
<!--&lt;!&ndash;                      <v-btn v-else @click="orderBy.order = 'desc'" color="blue" block height="48">&ndash;&gt;-->
<!--&lt;!&ndash;                        <v-icon v-if="true" aria-hidden="false">&ndash;&gt;-->
<!--&lt;!&ndash;                          mdi-arrow-up-thick&ndash;&gt;-->
<!--&lt;!&ndash;                        </v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;                      </v-btn>&ndash;&gt;-->

<!--&lt;!&ndash;                    </v-col>&ndash;&gt;-->
<!--&lt;!&ndash;                    <v-col cols="9" md="8" class="pl-0 ml-0">&ndash;&gt;-->
<!--&lt;!&ndash;                      <v-select&ndash;&gt;-->
<!--&lt;!&ndash;                        v-model="orderBy.title"&ndash;&gt;-->
<!--&lt;!&ndash;                        :items="orderByItems"&ndash;&gt;-->
<!--&lt;!&ndash;                        label="Standard"&ndash;&gt;-->
<!--&lt;!&ndash;                        solo-inverted&ndash;&gt;-->

<!--&lt;!&ndash;                      ></v-select>&ndash;&gt;-->
<!--&lt;!&ndash;                    </v-col>&ndash;&gt;-->
<!--&lt;!&ndash;                  </v-row>&ndash;&gt;-->

<!--&lt;!&ndash;                </v-col>&ndash;&gt;-->


<!--                <v-col class="d-flex justify-end">-->
<!--                  <v-btn @click="clearFilter()" color="blue">Clear</v-btn>-->
<!--                </v-col>-->


<!--              </v-row>-->
<!--            </v-container>-->


          </v-form>

        </v-card-text>




      </v-card>
    </v-col>
  </v-row>





</template>



<script lang="ts">

import {Component, Vue, Prop} from 'nuxt-property-decorator'
import {SearchParams} from "~/types/SearchParams";
import {OrderBy} from "~/types/OrderBy";
import {Filter} from "~/types/filter";


@Component
export default class GameFilter extends Vue {

  public newFilter:Filter = {
    field: '',
    operator: '',
    condition: '',
    value: ''
  }

  get orderByItems(){
    return ['Release date', 'Score', 'Name']
  }

  @Prop() readonly searchParams!:SearchParams
  @Prop() readonly orderBy!:OrderBy
  @Prop() dynamicFilters!:Filter[]


  // public clearFilter(){
  //   this.searchParams.name = ''
  //   this.searchParams.score = 0
  // }



  public addFilter(filter:Filter){
    this.dynamicFilters.push(filter)
    this.newFilter ={
      field: '',
      operator: '',
      condition: '',
      value: ''
    }

  }


  public removeFilter(index:number){
    this.dynamicFilters.splice(index, 1);
  }


}

</script>



<style>

.games-list .card{
  margin: 20px;
}

</style>
