import Vue from 'vue'
import Vuex, { Module } from 'vuex'
import { RootState } from '@/models/root'
import { AuthorState } from '@/models/states/author'
import { AuthorSuggestion } from '@/models/suggestions/authorSuggestion'
import { SuggestionStoreMethods } from '@/enums/SuggestionStoreMethods'

Vue.use(Vuex)

export const author: Module<AuthorState, RootState> = {
  state: {
    authors: new Map()
  },
  mutations: {
    [SuggestionStoreMethods.setAuthor] (state, author: AuthorSuggestion): void {
      state.authors.set(author.id, author)
    }
  },
  getters: {
    [SuggestionStoreMethods.getAuthorById] (state, id: number): AuthorSuggestion | undefined {
      return state.authors.get(id)
    }
  },
  actions: {
    [SuggestionStoreMethods.setAuthor] ({ commit }, author: AuthorSuggestion): void {
      commit(SuggestionStoreMethods.setAuthor, author)
    }
  }
}
